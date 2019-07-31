import React from 'react';
import PropTypes from 'prop-types';


const GuessedWords = (props) => {
    let contents;
    if(props.guessedWords.length===0){
        contents=(
            <span data-test='guess-instructions'>
                Try to guess the right word !
            </span>
        );
    }else {
        contents=(
            <div data-test='guessed-words'>
                <h3>Guessed Words</h3>
                <table className="table table-bordered table-sm">
                    <thead className="thead-light">
                        <tr>
                            <th>#</th>
                            <th>Guess</th>
                            <th>Matching Letters</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.guessedWords.map((word, index)=>(
                            <tr key={index} data-test='each-guessed-word'>
                                <td>{index+1}</td>
                                <td>{word.guessedWord}</td>
                                <td>{word.letterMatchCount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br/>
                <h6 data-test='guess-count'>Number of gusses: {props.guessedWords.length}</h6>
            </div>
        );
    }
    return (
        <div data-test='component-guessed-words'>
            {contents}
        </div>
    );
};

GuessedWords.propTypes={
  guessedWords: PropTypes.arrayOf(
      PropTypes.shape({
          guessedWord:PropTypes.string.isRequired,
          letterMatchCount:PropTypes.number.isRequired
      })
  ).isRequired
};

export default GuessedWords;