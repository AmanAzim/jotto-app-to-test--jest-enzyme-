import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {findByTestAttr, checkProps} from '../testUtils/testUtils'
import checkPropTypes from 'check-prop-types'
import GuessedWords from './GuessedWords'

Enzyme.configure({adapter: new EnzymeAdapter()});

const defaultProps={
    guessedWords:[{guessedWord:'train', letterMatchCount:3 }] //means the "guessedWords" is the name of a array with an object with 2 key-value pair
};

const setup=(props={})=>{
  const setupProps={...defaultProps,...props};// If we provide any props value in the function which is similar to the defaultProps then it will just override it.
  return shallow(<GuessedWords {...setupProps}/>)
};


test('does not throw warning with expected props', ()=>{
    checkProps(GuessedWords, defaultProps);
});


// discribe groups several test()
describe('if there are no words guessed', ()=>{
    let wrapper;
    beforeEach(()=>{//it will run before each test inside this block
        wrapper=setup({guessedWords:[]});
    });

    test('render without error', ()=>{
        const component=findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });
    test('render instruction to guess a word', ()=>{
        const instructions=findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text()).not.toBe(0)
    });
});

describe('if there are words guessed', ()=>{

});