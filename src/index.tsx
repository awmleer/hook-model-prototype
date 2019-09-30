import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {setModel} from './library'
import {useCounter} from './model/counter'
import {useCounterDouble} from './model/counterDouble'

setModel('counter', useCounter)
setModel('counterDouble', useCounterDouble)

ReactDOM.render(<App />, document.getElementById('root'));
