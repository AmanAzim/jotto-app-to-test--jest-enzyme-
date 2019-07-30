import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import successReducer from './store/reducers/successReducer'
import guessWordReducer from './store/reducers/guessWordReducer'
import secretWordReducer from './store/reducers/secretWordReducer'
import ReduxThunk from 'redux-thunk'


export const rootReducer=combineReducers({
    successReducer,
    guessWordReducer,
    secretWordReducer
});
const logger=(store)=>{
  return (next)=>{
      return (action)=>{
          //console.log('Dispatching',action);
          const result=next(action);
         // console.log('Next state',store.getState());
          return result;
      };
  };
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;// for Redux Devtool
const store=createStore(rootReducer, composeEnhancers(applyMiddleware(logger, ReduxThunk)));
                                                                                                                    // for testing purposes
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root') || document.createElement('div'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
