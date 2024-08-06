import React from 'react';

function GuessRow({ guess }) {
  let guessDisplay = [];
  if (!guess) {
    console.log("Guess is empty. Generating empty array...");
    guessDisplay = [
      {letter: '', status: ''},
      {letter: '', status: ''},
      {letter: '', status: ''},
      {letter: '', status: ''},
      {letter: '', status: ''},
    ];
  } else {
    console.log(`Guess has value.`);
    [...guess].map(letter => guessDisplay.push(letter))
  }
  return (
    <p className="guess">
      {guessDisplay.map((letter, index) => (<span className={`cell ${letter.status}`} key={index}>{letter.letter}</span>))}
    </p>
  )
}

function GuessList({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess, index) => (
        <GuessRow guess={guess} key={index} />
        ))}
    </div>
  );
}



export default GuessList;
