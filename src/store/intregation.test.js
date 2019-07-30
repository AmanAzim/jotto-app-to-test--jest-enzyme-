import ReduxThunk from 'redux-thunk'
import {rootReducer} from '../index'
import {createStore, applyMiddleware} from 'redux'

import {guessWord} from './actions/actionCreator'



describe('guess word action dispatcher', ()=>{

   const secretWordReducer='party';
   const unsuccessfulGuess='train';


   describe('no guess word', ()=>{
      let store;
      const initialState={secretWordReducer};
      beforeEach(()=>{
          //const createStoreWithMiddleware=applyMiddleware(ReduxThunk)(createStore);
          //store=createStoreWithMiddleware(rootReducer, initialState);
          store=createStore(rootReducer, initialState, applyMiddleware(ReduxThunk));//When we use the reducers itself to represent each state properties then we must set an initial state like this
      });

      test('update state correctly for unsuccessful guess', ()=>{
          store.dispatch(guessWord(unsuccessfulGuess));
          const expectedState={
              ...initialState,//value of the "secretWordReducer"
              successReducer:false,
              guessWordReducer:[{
                  guessedWord:unsuccessfulGuess,
                  letterMatchCount:3
              }]
          };
          const newState=store.getState();
          expect(newState).toEqual(expectedState);
      });
      test('update state correctly for successful guess', ()=>{
         store.dispatch(guessWord(secretWordReducer));
         const expectedState={
            ...initialState,//value of the "secretWordReducer"
            successReducer:true,
            guessWordReducer: [{
                guessedWord:secretWordReducer,
                letterMatchCount:5
            }]
         };
         const newState=store.getState();
         expect(newState).toEqual(expectedState);
      });
   });



   describe('some guess word', ()=>{
      const guessWordReducer=[{guessedWord:'agile', letterMatchCount:1}];
      const initialState={guessWordReducer, secretWordReducer};
      let store;
      beforeEach(()=>{
          store=createStore(rootReducer, initialState, applyMiddleware(ReduxThunk));
      });

      test('update state correctly for unsuccessful guess', ()=>{
          store.dispatch(guessWord(unsuccessfulGuess));
          const expectedState={
              secretWordReducer,//Same as ...initialState,
              successReducer:false,
              guessWordReducer:[
                  ...guessWordReducer,
                  {
                      guessedWord:unsuccessfulGuess,
                      letterMatchCount:3
                  }
              ]
          };
          const newState=store.getState();
          expect(newState).toEqual(expectedState);
      });
      test('update state correctly for successful guess', ()=>{
          store.dispatch(guessWord(secretWordReducer));
          const expectedState={
              ...initialState,//secretWordReducer,
              successReducer:true,
              guessWordReducer:[
                  ...guessWordReducer,
                  {
                      guessedWord:secretWordReducer,
                      letterMatchCount:5
                  }
              ]
          };
          const newState=store.getState();
          expect(newState).toEqual(expectedState);
      });
   });
});