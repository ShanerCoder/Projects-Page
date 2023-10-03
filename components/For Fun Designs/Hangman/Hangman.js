import { useState } from "react";
import classes from "./Hangman.module.css";
import HangmanOptions from "./HangmanOptions";
import { Transition } from "semantic-ui-react";

function Hangman() {
  const transitionTime = 400;
  const [transition, setTransition] = useState(false);
  const [lives, setLives] = useState(6);
  const [wordToGuess, setWordToGuess] = useState("");
  const [view, setView] = useState("options");
  return (
    <div className={classes.mainDiv}>
      <h1>Hangman</h1>
      <Transition
        animation="scale"
        duration={transitionTime}
        visible={!transition}
      >
        <div className={classes.inputFormDiv}>
          {view == "options" && <HangmanOptions />}
          {wordToGuess != "guessWord" && <></>}
        </div>
      </Transition>
    </div>
  );
}

export default Hangman;
