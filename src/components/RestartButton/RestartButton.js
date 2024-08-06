import React from 'react';

function RestartButton({ resetGame }) {
  return (
    <button
      onClick={() => {
        console.log("Button press");
        resetGame();
      }}
    >
      RESTART
    </button>
  )
}

export default RestartButton;
