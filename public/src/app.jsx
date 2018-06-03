import 'babel-polyfill';
import './prop-types';
import React from 'react';
import {render} from 'react-dom';
import App from './app/app.jsx';

let app = document.getElementById('app');

render(<App />, app);