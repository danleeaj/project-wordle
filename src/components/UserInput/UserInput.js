import React from 'react';

function UserInput({ updateGuessList, gameStatus }) {
  const [ guess, setGuess ] = React.useState('')
  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        if (guess.length == 5) {
          setGuess('');
          console.log({guess});
          updateGuessList({ nextGuess: guess });
        } else {
          window.alert("Input must be 5 letters long.")
        }
      }}>
      <label htmlFor="guess-input">Enter guess:</label>

      {gameStatus=='ongoing'
      ? <input 
        autoComplete='off'
        maxLength={5}
        id="guess-input" 
        type="text" 
        onChange={(event) => {
          let nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
          }
        }
        value={guess}
        />
      : <input disabled />
      }



    </form>
  );
}

export default UserInput;
