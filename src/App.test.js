import React from 'react'
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./index";
import ReduxThunk from "redux-thunk";
//import {shallow} from "enzyme";
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';


import App from './App';
import secretWordReducer from "./store/reducers/secretWordReducer";
import guessWordReducer from "./store/reducers/guessWordReducer";

Enzyme.configure({adapter: new EnzymeAdapter()});

const setup=(initialState={})=>{

    const store=createStore(rootReducer, initialState, applyMiddleware(ReduxThunk));

    const wrapper=shallow(<App store={store}/>).dive();// only one dive() because we just want to see access the components properties not childrens

    return wrapper
};

describe('redux properties', ()=>{
     test('has access to `success` state', ()=>{
        const successReducer=false;
        const wrapper=setup({successReducer});
        const successState=wrapper.props().success;// This way of accessing props is for functional component and for class based component >wrapper.instance().props.guessWord;
        expect(successState).toBe(false)
     });
     test('has access to `secretWord` state', ()=>{
        const secretWordReducer='party';
        const wrapper=setup({secretWordReducer});
        const secretWordProp=wrapper.props().secretWord;// This way of accessing props is for functional component and for class based component >wrapper.instance().props.guessWord;
        expect(secretWordProp).toBe(secretWordReducer);
     });
     test('has access to `guessedWord` state', ()=>{
        const guessWordReducer=[{guessedWord:'train', letterMatchCount:3 }];
        const wrapper=setup({guessWordReducer});
        const guessedWordProp=wrapper.props().guessedWord;// This way of accessing props is for functional component and for class based component >wrapper.instance().props.guessWord;
        expect(guessedWordProp).toBe(guessWordReducer);
     });
     test('has access to `getSecretWord` function in props', ()=>{
        const wrapper=setup();
        const getSecretWord=wrapper.props().getSecretWord;// This way of accessing props is for functional component and for class based component >wrapper.instance().props.guessWord;
        expect(getSecretWord).toBeInstanceOf(Function);
     });
});