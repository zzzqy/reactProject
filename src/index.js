import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/usage/app.scss'
import {BrowserRouter as Router} from "react-router-dom"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
