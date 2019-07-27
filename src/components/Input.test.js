import React from 'react'
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {combineReducers, createStore} from 'redux'

import {findByTestAttr} from "../testUtils/testUtils"
import Input from './Input'
import {rootReducer} from '../index'

Enzyme.configure({adapter: new EnzymeAdapter()});

///////////////////////////Necessary when testing component that uses Redux's "connect()()"/////////////////////////////
const storeFactory=(initialState)=>{
    return createStore(rootReducer, initialState);
};
const setup=(initialState={})=>{
    const store=storeFactory(initialState);
    const wrapper=shallow(<Input store={store}/>); //Need to do this for a component with Redux
    console.log(wrapper.debug());// it will show what the wrapper is returning
};
setup(); //running it just to check console.log
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


describe('render', ()=>{

    describe('word has not been guessed', ()=>{
        test('render component without error', ()=>{

        });
        test('render input box', ()=>{

        });
        test('render submit button', ()=>{

        });
    });

    describe('word has been guessed', ()=>{
        test('render component without error', ()=>{

        });
        test('does not render input box', ()=>{

        });
        test('does not render submit button', ()=>{

        });
    });

});

describe('update state', ()=>{

});