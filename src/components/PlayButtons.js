import { useState } from "react";

//the buttons to play the game. when player hits start, start is disabled and guess and give up become enabled. when player wins or quits, start is enabled and guess/give up are disabled.

function PlayButtons(props) {
  //used to determine which buttons are disabled
  const [gamePlay, setGamePlay] = useState(false);
  //will be used later to end game
  const [gameOver, setGameOver] = useState(false);
  //event listener function for start button
  function startToggle(evt) {
    if (gamePlay === false) {
      setGamePlay(true);
    }
  }

  return (
    <>
      {/*start button prompts disabling itself, enabling other buttons and triggers marker change*/}
      <button
        name="start"
        disabled={gamePlay}
        onClick={() => {
          startToggle();
          props.play();
        }}
      >
        Start
      </button>
      {/* to come: adding in the modal window when player triggers guess button*/}
      <button name="guess" disabled={!gamePlay} onClick={props.PlayButtons}>
        Guess
      </button>
      {/* game over functionality has yet to be completed */}
      <button name="giveUp" disabled={!gamePlay} onClick={gameOver}>
        Give Up
      </button>
    </>
  );
}

export default PlayButtons;
