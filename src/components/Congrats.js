import React,{Component} from 'react';
import PropTypes from 'prop-types';

import Input from './Input'

const Congrats = (props) => {
    const {success}=props;

    if(success){
        return (
            <div data-test='component-congrats' className="alert alert-success">
                <span data-test='congrats-message'>
                    Congratulation ! you guessed the word
                </span>
                <button data-test='reset-btn' className="btn btn-primary">New word</button>
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
  //success:PropTypes.bool.isRequired//This will activate the "checkPropTypes" also
};

export default Congrats;