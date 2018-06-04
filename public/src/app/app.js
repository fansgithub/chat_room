import { observable, action } from 'mobx';
import V from 'V';
import utils from 'utils';
import { ajax } from 'h5-components';

export default new class Index extends V.BaseStore{

    ws = null;
    createConnect = () => {
        //建立连接
        this.ws = new WebSocket("ws://192.168.10.24:8181");
        this.ws.onopen = () => {
            this.ws.send(JSON.stringify({
                source: window.InitData.user_nick_name,
                type: 'system',
                message: `${window.InitData.user_nick_name}已连接`,
            }))
        };
        //收到消息处理
        this.ws.onmessage = action((e) => {
            if(typeof e.data === 'string') {
                let data = JSON.parse(e.data);
                if(data.callback){
                    this[data.callback](data.params);
                }else{
                    this.messages.push({
                        source: data.source,
                        message: data.message
                    })
                }
               
            }else if(e.data instanceof ArrayBuffer){
                console.log('暂不支持的数据类型')
            }
        });
        this.ws.onclose = (e) => {

            // ws.send(JSON.stringify({
            //     source: userInfo.user_nick_name,
            //     type: 'system',
            //     message: userInfo.user_nick_name + '已断开'
            // }));
        };
    }
 
    @observable onLineNumber = 0;

    @observable messages = [];

    @observable currentMsg = '';

    @action changeOnLineNumber = (num) => {
        console.log(num)
        this.onLineNumber = num;
    }

    @action
    send = () => {
        if(this.ws.readyState === WebSocket.OPEN){
            this.ws.send(JSON.stringify({
                source: window.InitData.user_nick_name,
                type: 'personal',
                message: this.currentMsg,
            }));
            this.messages.push({
                userId: window.InitData.user_id,
                message: this.currentMsg,
            })
            this.currentMsg = '';
        }
    }

    layout = () => {
        ajax.get('/layout').then(()=>{
            window.location = '/login.html';
        })
    }

    getValidationConfig(){
        return {
            
        };
    }
};