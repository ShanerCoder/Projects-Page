import { useState } from "react";
import classes from "./Hangman.module.css";
import HangmanOptions from "./HangmanOptions";
import { Transition } from "semantic-ui-react";
import CreateWord from "./CreateWord";

function Hangman() {
  const transitionTime = 400;
  const [transition, setTransition] = useState(false);
  const [lives, setLives] = useState(6);
  const [wordToGuess, setWordToGuess] = useState("");
  const [view, setView] = useState("options");

  function handleUpdateOfView(view) {
    setTransition(true);
    setTimeout(() => {
      setView(view);
      setTransition(false);
    }, transitionTime);
  }

  return (
    <div className={classes.mainDiv}>
      <h1>Hangman</h1>
      <Transition
        animation="scale"
        duration={transitionTime}
        visible={!transition}
      >
        <div className={classes.inputFormDiv}>
          {view == "options" && <HangmanOptions setView={handleUpdateOfView} />}
          {view == "createWord" && <CreateWord setView={handleUpdateOfView} />}
          {wordToGuess != "guessWord" && <></>}
        </div>
      </Transition>
    </div>
  );
}

export default Hangman;
