import React,{useEffect} from 'react'
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./index";
import ReduxThunk from "redux-thunk";
import {shallow, mount, render} from "enzyme";
import { act } from "react-dom/test-utils";



import App,{UnconnectedApp} from './App';
import secretWordReducer from "./store/reducers/secretWordReducer";
import guessWordReducer from "./store/reducers/guessWordReducer";


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
        const guessedWordProp=wrapper.props().guessedWords;// This way of accessing props is for functional component and for class based component >wrapper.instance().props.guessWord;
        expect(guessedWordProp).toBe(guessWordReducer);
     });
     test('has access to `getSecretWord` function in props', ()=>{
        const wrapper=setup();
        const getSecretWord=wrapper.props().getSecretWord;// This way of accessing props is for functional component and for class based component >wrapper.instance().props.guessWord;
        expect(getSecretWord).toBeInstanceOf(Function);
     });
});

//https://stackoverflow.com/questions/56077108/testing-a-component-that-uses-react-useeffect-using-enzyme
test('`getSecretWord` runs on App mount (only if App is a Class based component this test will pass)', ()=>{
    const getSecretWordMock=jest.fn();//Now jest will watch when this "getSecretWordMock" is called and how

    const props={
        getSecretWord:getSecretWordMock,
        success:true,
        guessedWord:[],
        secretWord:''
    };
    //setup the App component with "getSecretWordMock" as the "getSecretWord" prop
    let wrapper=shallow(<UnconnectedApp {...props}/>);

    //Run lifecycle method so that "getSecretWord()" inside it runs
    wrapper.instance().componentDidMount();

    //check to see if the Mock "getSecretWordMock" ran
    const getSecretWordCallCount=getSecretWordMock.mock.calls.length;
    expect(getSecretWordCallCount).toBe(1);
    expect(getSecretWordMock).toHaveBeenCalledTimes(1)
});