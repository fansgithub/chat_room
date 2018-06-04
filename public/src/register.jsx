import 'babel-polyfill';
import './prop-types';
import React from 'react';
import {render} from 'react-dom';
import Register from './register/index.jsx';
import './assets/main.less';


let app = document.getElementById('app');

render(<Register />, app);