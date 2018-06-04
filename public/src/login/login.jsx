import React from 'react';
import { observer } from 'mobx-react';
import { Button, Validator as V } from 'h5-components';
import store from './login.js';
import './login.less';
const welcome = require('../assets/image/welcome.png');

@observer
export default class Login extends React.Component{
    componentWillMount(){
        store.initStore();
    }
    render(){
        return (
            <div className="login">
                <div className="welcome">
                    <img src={welcome} />
                </div>
                <div className="login-form">
                    <div className="login-inp">
                        <label>登录名</label>
                        <input type="text" value={store.loginName} onChange={(e)=>{store.changeLoginName(e.target.value)}} />
                    </div>
                    <div className="login-inp">
                        <label>密码</label>
                        <input type="password" value={store.password} onChange={(e)=>{store.changePassword(e.target.value)}} />
                    </div>
                    <div className="login-inp">
                        <a href="#" onClick={store.login}>立即登录</a>
                    </div>
                </div>
                <div className="login-txt">
                    <a href="javascript:void(0)" onClick={store.register}>立即注册</a>|
                    <a href="javascript:void(0)" onClick={store.forgetPassword}>忘记密码？</a>
                </div>
            </div>
            
        );
    }
}