import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; //for bootstrap

import Congrats from './components/Congrats'
import GuessedWords from './components/GuessedWords'


function App() {

  return (
      <div className="container">
          <h1>Jotto</h1>
          <Congrats success={true}/>
          <GuessedWords guessedWords={[{guessedWord:'train', letterMatchCount:3 }]}/>
      </div>
  );
}

export default App;
