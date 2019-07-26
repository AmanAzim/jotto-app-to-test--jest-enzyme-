import React from 'react';
import PropTypes from 'prop-types';

const Congrats = (props) => {
    if(props.success){
        return (
            <div data-test='component-congrats'>
                <spam data-test='congrats-message'>
                    Congratulation ! you guessed the word
                </spam>
            </div>
        );
    }else{
        return (
            <div data-test='component-congrats'/>
        );
    }
};

Congrats.propTypes={
  success:PropTypes.bool.isRequired//This will activate the "checkPropTypes" also
};

export default Congrats;