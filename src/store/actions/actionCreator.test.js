import moxios from 'moxios'
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'

import actionTypes from './actionTypeNames'
import {correctGuess, getLetterMatchCount, getSecretWord} from './actionCreator'
import {rootReducer} from '../../index'

/*
describe('correct guess', ()=>{
    test('return an action with type `CORRECT_GUESS`', ()=>{
        const action=correctGuess();
        expect(action).toEqual({type:actionTypes.CORRECT_GUESS})
    });
});
*/
/////////////////////////////////////To test the helper function//////////////////////////////////////////////////////
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
/////////////////////////////////////To test the helper function//////////////////////////////////////////////////////

///////////////////////////////////////To test Action creators////////////////////////////////////////////////////////
describe('getSecretWord action creator', ()=>{
    beforeEach(()=>{
       moxios.install();
    });
    afterEach(()=>{
       moxios.uninstall();
    });

    test('adds response words to state', ()=>{
        const secretWordReducer='party';
        const initialState={secretWordReducer};
        const store=createStore(rootReducer, initialState, applyMiddleware(ReduxThunk));

        //This wait() tells how to response when axios sence a request
        moxios.wait(()=>{
            const request=moxios.requests.mostRecent();//take the last request
            request.respondWith({ //create a response for the request
                status:200,
                response:secretWordReducer
            });
            //we must return this always to run the test successfully
            return store.dispatch(getSecretWord()).then(()=>{
                const newState=store.getState();
                expect(newState.secretWordReducer).toBe(secretWordReducer);
            });
        });
    });
});


