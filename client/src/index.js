import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise'
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './App';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, thunk)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();