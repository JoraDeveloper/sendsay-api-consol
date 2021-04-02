import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import './style.scss';
import App from './App';
import rootReducer from './store/reducers/rootReducer';


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(),
    // other store enhancers if any
);

const store = createStore(rootReducer, enhancer);




render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);