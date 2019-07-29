import actionTypes from './actionTypeNames'
import {correctGuess, getLetterMatchCount} from './actionCreator'

/*
describe('correct guess', ()=>{
    test('return an action with type `CORRECT_GUESS`', ()=>{
        const action=correctGuess();
        expect(action).toEqual({type:actionTypes.CORRECT_GUESS})
    });
});
*/

describe('getLetterMatchCount', ()=>{
    const secretWord='party';
    test('returns correct count when there are no matching letters', ()=>{
        const letterMatchCount=getLetterMatchCount('bones', 'party');
        expect(letterMatchCount).toBe(0);
    });
    test('returns correct count when there are 3 matching letters', ()=>{
        const letterMatchCount=getLetterMatchCount('train', 'party');
        expect(letterMatchCount).toBe(3);
    });
    test('return the correct count when there are duplicate letters in the guess',()=>{
        const letterMatchCount=getLetterMatchCount('parks', 'party');
        expect(letterMatchCount).toBe(3);
    });
});