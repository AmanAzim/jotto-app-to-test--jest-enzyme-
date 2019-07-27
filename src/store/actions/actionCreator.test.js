import actionTypes from './actionTypeNames'
import {correctGuess} from './actionCreator'

describe('correct guess', ()=>{
    test('return an action with type `CORRECT_GUESS`', ()=>{
        const action=correctGuess();
        expect(action).toEqual({type:actionTypes.CORRECT_GUESS})
    });
});