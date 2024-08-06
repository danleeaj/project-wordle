import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers'

import UserInput from "../UserInput/UserInput"
import GuessList from '../GuessList';
import Banner from '../Banner/Banner';

// // Pick a random word on every pageload.
// const answer = sample(WORDS);
// // To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {

  const startingGuessList = [];

  range(NUM_OF_GUESSES_ALLOWED).map(() => startingGuessList.push(''));

  const [ guessList, setGuessList ] = React.useState(startingGuessList);
  const [ guessNumber, setGuessNumber ] = React.useState(0);
  const [ gameStatus, setGameStatus ] = React.useState('ongoing');
  const [ answer, setAnswer ] = React.useState(sample(WORDS));

  console.info({ answer });

  function resetGame() {
    setGuessList(startingGuessList);
    setGuessNumber(0);
    setGameStatus('ongoing');
    setAnswer(sample(WORDS));
  }

  function updateGuessList({ nextGuess }) {
    let nextGuessList = [...guessList];
    let nextGuessNumber = guessNumber + 1;
    nextGuessList[guessNumber] = checkGuess(nextGuess, answer);
    setGuessList(nextGuessList);
    setGuessNumber(nextGuessNumber);
    if (nextGuess == answer) {
      setGameStatus('victory');
    } else if (guessNumber == NUM_OF_GUESSES_ALLOWED - 1 && nextGuess != answer) {
      setGameStatus('loss');
    }
  }

  function updateGameStatus( status ) {
    setGameStatus(status);
  }

  return (
    <>
      <GuessList guessList={guessList}/>
      <UserInput updateGuessList={updateGuessList} updateGameStatus={updateGameStatus} gameStatus={gameStatus}/>
      {gameStatus == 'victory' && <Banner type='happy' guesses={guessNumber} resetGame={resetGame}/>}
      {gameStatus == 'loss' && <Banner type='sad' answer={answer} resetGame={resetGame}/>}
    </>
  );
}

export default Game;
