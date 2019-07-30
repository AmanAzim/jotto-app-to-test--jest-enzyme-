import React from 'react'
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {applyMiddleware, createStore} from 'redux'

import {findByTestAttr} from "../testUtils/testUtils"
import Input from './Input'
import {rootReducer} from '../index'
import ReduxThunk from "redux-thunk";


Enzyme.configure({adapter: new EnzymeAdapter()});
///////////////////////////Necessary when testing component that uses Redux's "connect()()"/////////////////////////////
const setup=(initialState={})=>{

    //const store=createStore(rootReducer, initialState);
    const store=createStore(rootReducer, initialState, applyMiddleware(ReduxThunk));

    //Need to do this for a component with Redux
    const wrapper=shallow(<Input store={store}/>).dive().dive();//we needed "dive()" to see access the child component of the HOC of Redux whice is the <Input /> it self. one more "dive()" took inside the <Input />. with 2 "dive()" we will get to the wrapper comp of Redux only
    //console.log(wrapper.debug());// it will show what the wrapper is returning
    return wrapper
};
//setup(); //running it just to check console.log
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


describe('render', ()=>{

    describe('word has not been guessed', ()=>{
        let wrapper;
        beforeEach(()=>{
            const initialState={successReducer:false};
            wrapper=setup(initialState);
        });

        test('render component without error', ()=>{
            const componentInput=findByTestAttr(wrapper, 'component-input');
            expect(componentInput.length).toBe(1);
        });
        test('render input box', ()=>{
            const inputElement=findByTestAttr(wrapper, 'input-box');
            expect(inputElement.length).toBe(1);
        });
        test('render submit button', ()=>{
            const submitBtn=findByTestAttr(wrapper, 'submit-btn');
            expect(submitBtn.length).toBe(1);
        });
    });

    describe('word has been guessed', ()=>{
         let wrapper;
         beforeEach(()=>{
            const initialState={successReducer:true};
            wrapper=setup(initialState);
         });

        test('render component without error', ()=>{
            const component=findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });
        test('does not render input box', ()=>{
            const inputElement=findByTestAttr(wrapper, 'input-box');
            expect(inputElement.length).toBe(0);
        });
        test('does not render submit button', ()=>{
            const submitBtn=findByTestAttr(wrapper, 'submit-btn');
            expect(submitBtn.length).toBe(0);
        });
    });

});

describe('redux props', ()=>{
    test('has success piece of state as props', ()=>{
       const successReducer=false;
       const wrapper=setup({successReducer});
       const successProp=wrapper.instance().props.success;// as we named the successReducer as "success" while accessing it from redux in "Input.js"
       expect(successProp).toBe(successReducer);
    });
    test('`guessWord()` action creator is a function prop', ()=>{
       const wrapper=setup();
       const guessWord=wrapper.instance().props.guessWord;
       expect(guessWord).toBeInstanceOf(Function);
    });
});