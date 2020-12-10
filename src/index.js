import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

import { BASE_API } from './keys'; 
import axios from 'axios'; 

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css'; 
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './index.css';
import App from './App';

axios.defaults.baseURL = BASE_API; 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
