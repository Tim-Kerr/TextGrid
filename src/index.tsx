import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import textReducer from './reducers/TextReducer';
import { Provider } from 'react-redux';
// @ts-ignore
const msmq = window.require('node-msmq');

console.log('msmq: ', msmq);

// Create Redux store
const store = createStore(
    textReducer,
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// var msgQueue = openOrCreateQueue('.\\Private$\\TextMessageQueue');
// msgQueue.startReceiving();

ReactDOM.render(
    <Provider store={store}>
        <App msgQueue={{}} />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
