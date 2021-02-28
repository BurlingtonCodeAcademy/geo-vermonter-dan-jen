import { useState } from "react";

//the buttons to play the game. when player hits start, start is disabled and guess and give up become enabled. when player wins or quits, start is enabled and guess/give up are disabled.
//functionality to come
function PlayButtons(props) {
 
    const [gamePlay, setGamePlay] = useState(false)

    const [gameOver, setGameOver] = useState(false)

    function startToggle(evt) {
    if (gamePlay === false) {
      setGamePlay(true);
    }
  }
  
//   function gameOver(){
    
//   }

  return (
    <>
      <button name="start" disabled={gamePlay} onClick={() => {startToggle(); props.play()}}>
        Start
      </button>
      <button name="guess" disabled={!gamePlay} onClick={props.PlayButtons}>
        Guess
      </button>
      <button name="giveUp" disabled={!gamePlay} onClick={gameOver}>
        Give Up
      </button>
    </>
  );
}

export default PlayButtons;

//start.disabled = false; onClick status changes to true.
//quit.disabled = true;
//guess.disabled = true;

// const [start, setStart] = useState(false)
// const [guess, setGuess] = useState(true)
// const [giveUp, setGiveUp] = useState(true)

// function startToggle {
//     setStart(

//         start.disabled = false
//         quit.disabled = true;
//         guess.disabled = true;
//     } else {
//         if (start.disabled = true) {
//             quit.disabled = false;
//             guess.disabled = false;
//         }
//     }
// }
