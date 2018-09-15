import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/usage/app.scss'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
