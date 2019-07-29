import {shallow} from 'enzyme'
import {findByTestAttr} from '../testUtils/testUtils'
import {rootReducer} from '../index'
import {createStore} from 'redux'

import {guessWord} from './actions/actionCreator'



describe('guess word action dispatcher', ()=>{

   const secretWord='party';
   const unsuccessfulGuess='train';

   describe('no guess word', ()=>{
      let store;
      const initialState={secretWord};
      beforeEach(()=>{
          store=createStore(rootReducer, initialState);
      });

      test('update state correctly for unsuccessful guess', ()=>{
          store.dispatch({unsuccessfulGuess});
          const expectedState={
              ...initialState,
              successReducer:false,
              guessWordReducer:[{
                  unsuccessfulGuess,
                  letterMatchCount:3
              }]
          };
          const newState=store.getState();
          expect(newState).toEqual(expectedState);
      });
      test('update state correctly for successful guess', ()=>{

      });
   });

   describe('some guess word', ()=>{
      test('update state correctly for unsuccessful guess', ()=>{

      });
      test('update state correctly for successful guess', ()=>{

      });
   });
});