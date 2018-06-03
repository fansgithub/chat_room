import { observable, action } from 'mobx';
import V from 'V';
import utils from 'utils';
import { ajax } from 'h5-components';

export default new class Index extends V.BaseStore{
 
    @observable onLineNumber = 0;
    //@observable messages = [];

    @observable messages = [{
        message: '模拟消息模拟消息模拟消息模拟消息模拟消息模拟消息'
    }, {
        message: '模拟消息模拟消息模拟消息模拟消息模拟消息模拟消息'
    }, {
        message: '模拟消息模拟消息模拟消息模拟消息模拟消息模拟消息'
    }];

    @observable currentMsg = '';

    @action
    send = () => {

    }

    getValidationConfig(){
        return {
            
        };
    }
};