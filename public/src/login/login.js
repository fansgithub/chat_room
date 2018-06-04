import { observable, action } from 'mobx';
import V from 'V';
import utils from 'utils';
import { ajax } from 'h5-components';

export default new class LoginForm extends V.BaseStore{
 
    @observable loginName = '';
    @observable password = '';
    @observable companyCode = '';

    @action
    changeLoginName = (value) => {
        this.loginName = value;
    }
    @action
    changePassword = (value) => {
        this.password = value;
    }

    login = () => {
        if(!this.validate()) return;
        ajax.post('/login', {
            loginName: this.loginName,
            password: this.password,
        }).then(()=>{
            if(window.localStorage){
                window.localStorage.setItem('login.loginName', this.loginName);
            }
            window.location = '/index.html';
        });
    }

    register = () => {
        window.location = '/register.html'
    }
    forgetPassword = () => {
        alert('暂未开放')
        //window.location = '/forgetPassword.html'
    }

    @action
    initStore = () => {
        if(!_.isNil(window.localStorage.getItem('login.loginName'))){
            this.loginName = window.localStorage.getItem('login.loginName');
        }
    }

    getValidationConfig(){
        return {
            'loginName': {
                required: true,
                messages: {
                    required: '请输入登录名'
                }
            },
            'password': {
                required: true,
                messages: {
                    required: '请输入密码'
                }
            },
        };
    }
};