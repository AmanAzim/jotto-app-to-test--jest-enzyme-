import actionTypes from './actionTypeNames'

export const correctGuess=(payload)=>{
    return {
        type:actionTypes.CORRECT_GUESS
    }
};