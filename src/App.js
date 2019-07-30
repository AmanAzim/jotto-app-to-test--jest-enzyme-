import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //for bootstrap
import {connect} from 'react-redux'

import Congrats from './components/Congrats'
import GuessedWords from './components/GuessedWords'
import Input from './components/Input'
import {guessWord, getSecretWord} from "./store/actions/actionCreator";
import secretWordReducer from "./store/reducers/secretWordReducer";




const App=(props)=>{
  const {success, guessedWord, secretWord, getSecretWord}=props;

  return (
      <div className="container">
          <h1>Jotto</h1>
          <Congrats success={success}/>
          <GuessedWords guessedWords={guessedWord}/>
      </div>
  );
}

const mapStateToProps=(state)=>{
    return {
        success:state.successReducer,
        guessedWord:state.guessWordReducer,
        secretWord:state.secretWordReducer
    }
};
const mapDispatchToProps=(dispatch)=>{
    return {
        getSecretWord:()=>dispatch(getSecretWord())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
