import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './common/css/index.css'
import {Provider} from 'react-redux'
// import {createStore} from 'redux'
import configStore from './store/configStore'

const store = configStore()
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


