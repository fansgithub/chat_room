import 'babel-polyfill';
import './prop-types';
import React from 'react';
import {render} from 'react-dom';
import Login from './login/login.jsx';

let app = document.getElementById('app');

render(<Login />, app);