import {shallow} from 'enzyme'
import {findByTestAttr} from '../testUtils/testUtils'
import {rootReducer} from '../index'
import {createStore} from 'redux'

import {guessWord} from './actions/actionCreator'



describe('guess word action dispatcher', ()=>{

   const secretWordReducer='party';
   const unsuccessfulGuess='train';


   describe('no guess word', ()=>{
      let store;
      const initialState={secretWordReducer};
      beforeEach(()=>{
          store=createStore(rootReducer, initialState);
      });

      test('update state correctly for unsuccessful guess', ()=>{
          store.dispatch(guessWord(unsuccessfulGuess));
          const expectedState={
              ...initialState,
              successReducer:false,
              guessWordReducer:[{
                  guessedWords:unsuccessfulGuess,
                  letterMatchCount:3
              }]
          };
          const newState=store.getState();
          expect(newState).toEqual(expectedState);
      });
      test('update state correctly for successful guess', ()=>{
         store.dispatch(guessWord(secretWordReducer));
         const expectedState={
            ...initialState,
            successReducer:true,
            guessWordReducer: [{
                guessedWords:secretWordReducer,
                letterMatchCount:5
            }]
         };
         const newState=store.getState();
         expect(newState).toEqual(expectedState);
      });
   });



   describe('some guess word', ()=>{
      const guessWordReducer=[{guessedWords:'agile', letterMatchCount:1}];
      const initialState={guessWordReducer, secretWordReducer};
      let store;
      beforeEach(()=>{
          store=createStore(rootReducer, initialState);
      });

      test('update state correctly for unsuccessful guess', ()=>{
          store.dispatch(guessWord(unsuccessfulGuess));
          const expectedState={
              secretWordReducer,
              successReducer:false,
              guessWordReducer:[
                  ...guessWordReducer,
                  {
                      guessedWords:unsuccessfulGuess,
                      letterMatchCount:3
                  }]
          };
          const newState=store.getState();
          expect(newState).toEqual(expectedState);
      });
      test('update state correctly for successful guess', ()=>{
          store.dispatch(guessWord(secretWordReducer));
          const expectedState={
              secretWordReducer,
              successReducer:true,
              guessWordReducer:[
                  ...guessWordReducer,
                  {
                      guessedWords:secretWordReducer,
                      letterMatchCount:5
                  }
              ]
          };
          const newState=store.getState();
          expect(newState).toEqual(expectedState);
      });
   });
});