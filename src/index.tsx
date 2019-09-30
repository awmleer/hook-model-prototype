import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {setModel} from './library'
import {useCounter} from './model/counter'
import {useCounterDouble} from './model/counterDouble'

setModel('counter', useCounter)
setModel('counterDouble', useCounterDouble)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
