import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input'

const Congrats = (props) => {
    if(props.success){
        return (
            <div data-test='component-congrats' className="alert alert-success">
                <span data-test='congrats-message'>
                    Congratulation ! you guessed the word
                </span>
            </div>
        );
    }else{
        return (
            <div data-test='component-congrats'>
                <Input />
            </div>
        );
    }
};

Congrats.propTypes={
  success:PropTypes.bool.isRequired//This will activate the "checkPropTypes" also
};

export default Congrats;