import actionTypes from './actionTypeNames'

/*
export const correctGuess=()=>{
    return {
        type:actionTypes.CORRECT_GUESS
    }
};
*/

export const guessWord=()=>{
    return (dispatch, getState)=>{
        
    };
};


export const getLetterMatchCount=(guessedWord, secretWord)=>{

    const guessedLetterSet=new Set(guessedWord.split(''));
    const secretLetterSet=new Set(secretWord.split(''));
                                                 //The has() method returns a boolean indicating whether an element with the specified key exists or not.
    return [...secretLetterSet].filter(letter=>guessedLetterSet.has(letter)).length;// It will return the length of an array that only contains the letters from "secretLetterSet" that matches with the letters of "guessedLetterSet"
};