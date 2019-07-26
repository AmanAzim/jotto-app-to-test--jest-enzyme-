import React from 'react';

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

export default Congrats;