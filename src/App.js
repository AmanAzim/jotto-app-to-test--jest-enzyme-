import React,{useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //for bootstrap
import {connect} from 'react-redux'

import Congrats from './components/Congrats'
import GuessedWords from './components/GuessedWords'
import Input from './components/Input'
import {guessWord, getSecretWord, resetGame} from "./store/actions/actionCreator";





export const UnconnectedApp=(props)=>{

  const {success, guessedWords, secretWord, getSecretWord, resetGame}=props;

  useEffect(()=>{
      getSecretWord();
  }, []);

  return (
      <div className="container">
          <h1>Jotto</h1>
          <Congrats success={success} resetGame={resetGame}/>
          <GuessedWords guessedWords={guessedWords}/>
      </div>
  );
}

const mapStateToProps=(state)=>{
    //const {successReducer, guessWordReducer, secretWordReducer}=state;
    return {
        success:state.successReducer,
        guessedWords:state.guessWordReducer,
        secretWord:state.secretWordReducer
    }
};
const mapDispatchToProps=(dispatch)=>{
    return {
        getSecretWord:()=>dispatch(getSecretWord()),
        resetGame:()=>dispatch(resetGame())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedApp);
