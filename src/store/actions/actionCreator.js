import axios from 'axios'
import actionTypes from './actionTypeNames'

/*
export const correctGuess=()=>{
    return {
        type:actionTypes.CORRECT_GUESS
    }
};
*/
//////////////////////////////////////////Helper Function//////////////////////////////////////////////////
export const getLetterMatchCount=(guessedWord, secretWord)=>{

    const guessedLetterSet=new Set(guessedWord.split(''));
    const secretLetterSet=new Set(secretWord.split(''));
                                                 //The has() method returns a boolean indicating whether an element with the specified key exists or not.
    return [...secretLetterSet].filter(letter=>guessedLetterSet.has(letter)).length;// It will return the length of an array that only contains the letters from "secretLetterSet" that matches with the letters of "guessedLetterSet"
};
//////////////////////////////////////////Helper Function//////////////////////////////////////////////////




export const guessWord=(guessedWord)=>{

    return (dispatch, getState)=>{
        const secretWord=getState().secretWordReducer;
        const letterMatchCount=getLetterMatchCount(guessedWord, secretWord);

        dispatch(guessWordAction(guessedWord, letterMatchCount));

        if(guessedWord===secretWord){

            dispatch(successReducerAction());
        }
    };
};
const guessWordAction=(guessedWord, letterMatchCount)=>{
    return {
        type:actionTypes.GUESS_WORD,
        payload:{guessedWord, letterMatchCount}
    }
};
const successReducerAction=()=>{
    return {
        type:actionTypes.CORRECT_GUESS
    }
};

export const getSecretWord=()=>{
    return (dispatch)=>{
        return axios.get('').then((response)=>{
            dispatch({type:actionTypes.SET_SECRET_WORD, payload:response.data})
        })
    }
};





