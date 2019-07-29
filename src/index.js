import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import {combineReducers, createStore, applyMiddleware} from 'redux'
import successReducer from './store/successReducer'
import guessWordReducer from './store/guessWordReducer'
import ReduxThunk from 'redux-thunk'


export const rootReducer=combineReducers({
    successReducer,
    guessWordReducer
});

const store=createStore(rootReducer, applyMiddleware(ReduxThunk));
                                                                                                                    // for testing purposes
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root') || document.createElement('div'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
