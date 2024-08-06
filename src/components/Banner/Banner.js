import React from 'react';

import RestartButton from '../RestartButton/RestartButton';

function Banner({ type, guesses = 0, answer = '' , resetGame}) {
  return (
    <div className={`${type} banner`}>
      {type == 'happy'
        ? <VictoryBanner guesses={guesses} />
        : <SadBanner answer={answer} />
      }
      <RestartButton resetGame={resetGame} />
    </div>
  );
}

function VictoryBanner({ guesses = 0 }) {
  return (
    // <div className={`happy banner`}>
      <p>
        <strong>Congratulations!</strong> Got it in
        {' '}
        <strong>{guesses} guesses</strong>.
      </p>
    // </div>
  )
}

function SadBanner({ answer = '' }) {
  return (
    // <div class="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    // </div>
  )
}

export default Banner;


// ```html
// <div class="happy banner">
//   <p>
//     <strong>Congratulations!</strong> Got it in
//     <strong>3 guesses</strong>.
//   </p>
// </div>
// ```

// ```html
// <div class="sad banner">
//   <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
// </div>
// ```