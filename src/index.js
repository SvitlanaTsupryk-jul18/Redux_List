import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { dreateStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

const store = createStore(reducer, initState);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

