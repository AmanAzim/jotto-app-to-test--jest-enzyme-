import actionTypes from '../actions/actionTypeNames'
import successReducer from './successReducer'


test('returns default initial state of `false` if no action is passed', ()=>{
    const newState=successReducer(undefined, {});
    expect(newState).toBe(false)
});

test('returns `true` if action of type `CORRECT_GUESS` is received', ()=>{
    const newState=successReducer(undefined, {type:actionTypes.CORRECT_GUESS});
    expect(newState).toBe(true);

});

test('returns `false` if action type `RESET_GAME`', ()=>{
   const newState=successReducer(undefined, {type:actionTypes.RESET_GAME});
   expect(newState).toBe(false);
});