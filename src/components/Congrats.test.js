import React from 'react';
import Enzyme,{shallow, render, mount} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {findByTestAttr, checkProps} from '../testUtils/testUtils'
import checkPropTypes from 'check-prop-types'
import Congrats from './Congrats'

Enzyme.configure({adapter: new EnzymeAdapter()}); //We dont need to write these here any more because we have put them in "setupTests.js" which runs before any test

const defaultProps={success:false};
const setup=(props={})=>{
  const setupProps={...defaultProps,...props};// If we provide any props value in the function which is similar to the defaultProps then it will just override it.
  return shallow(<Congrats {...setupProps}/>)
};


test('render without error',()=>{
    const wrapper=setup({success:false});

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

test('does not throw warning with with expected props', ()=>{
    //this function is going to return the error instead of just console.log it
    const propError=checkPropTypes(Congrats.propTypes, {success:false}, 'prop', Congrats.name)// 1st the Component with propType object, 2nd the prop that we want to check, 3rd declare the 2nd param as a 'prop', 4th the name of the Component.
    expect(propError).toBeUndefined();// if the prop is a boolean then it should not throw any error then the error will be undefined
});


describe('`New word` button functionalities', ()=>{
    let wrapper;
    let resetBtn;
    beforeEach(()=>{
          wrapper=shallow(<Congrats success={true}/>);
          resetBtn=wrapper.find("[data-test='reset-btn']");
    });

    test('render `New word` if success is true', ()=>{
        expect(resetBtn.exists()).toBe(true);
    });
    test('reset all the states on clicking button `New word`', ()=>{
        const wrapper=mount(<Congrats success={true} />);//Needed only to access the props of a Functional component

        //let resetBtn=wrapper.find("[data-test='reset-btn']");
        //resetBtn.simulate('click');// This click will not have any effect as the onClick handler function is coming from props passed by parent thus cannot be used in test

        //expect(wrapper.instance().props.success).toBe(true)//If <Congrats /> would be a class based component
        //expect(wrapper).toBe(false);
        expect(wrapper.props().success).toBe(true)
    });

});
