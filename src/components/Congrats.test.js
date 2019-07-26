import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {findByTestAttr} from '../testUtils/testUtils'

import Congrats from './Congrats'

Enzyme.configure({adapter: new EnzymeAdapter()});

const setup=(props={})=>{
  return shallow(<Congrats {...props}/>)
};

test('render without error',()=>{
    const wrapper=setup();

    const CongratsComp=findByTestAttr(wrapper, "component-congrats");
    expect(CongratsComp.length).toBe(1);
});

test('render no text when `success` prop is false',()=>{
    const wrapper=shallow(<Congrats success={false}/>);

    const CongratsComp=wrapper.find("[data-test='component-congrats']");
    expect(CongratsComp.text()).toBe('');
});

test('render non-empty congrats when `success` prop is true',()=>{
    const wrapper=shallow(<Congrats success={true}/>);

    const CongratsComp=wrapper.find("[data-test='component-congrats']");
    expect(CongratsComp.text().length).not.toBe(0);
});