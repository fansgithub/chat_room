import 'babel-polyfill';
import './prop-types';
import React from 'react';
import {render} from 'react-dom';
import App from './app/app.jsx';
import './assets/main.less';

if(!window.InitData){
    window.location="/login.html";
}

let app = document.getElementById('app');

render(<App />, app);