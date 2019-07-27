import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux'
import successReducer from './store/successReducer'

export const rootReducer=combineReducers({
    successReducer,
});

const store=createStore(rootReducer);
                                                                                                                    // for testing purposes
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root') || document.createElement('div'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
