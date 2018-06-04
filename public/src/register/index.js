import { observable, action } from 'mobx';
import V from 'V';
import utils from 'utils';
import { ajax, Toptip } from 'h5-components';

export default new class RegisterForm extends V.BaseStore{

    @observable username = '';
    @observable password = '';
    @observable nickName = '';
    @observable gender = '';

    genderList = [{
        value: 'man',
        label: '男'
    }, {
        value: 'female',
        label: '女'
    }]

   
    submit = () => {
        if(!this.validate()) return;
        ajax.post('/register', {
            username: this.username,
            password: this.password,
            nickName: this.nickName,
            gender: this.password
        }).then(()=>{
            Toptip.success('注册成功，2s后自动跳转至登录页面');
            setTimeout(()=>{
                window.location = '/login.html';
            }, 2000)
        });
    }

    getValidationConfig(){
        return {
            'username': {
                required: true,
                messages: {
                    required: '请输入用户名'
                }
            },
            'password': {
                required: true,
                messages: {
                    required: '请输入密码'
                }
            },
            'nickName': {
                required: true,
                messages: {
                    required: '请输入昵称'
                }
            },
            'gender': {
                required: true,
                messages: {
                    required: '请选择性别'
                }
            },
        };
    }
};