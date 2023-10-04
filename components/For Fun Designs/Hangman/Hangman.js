import { useState } from "react";
import classes from "./Hangman.module.css";
import HangmanOptions from "./HangmanOptions";
import { Transition } from "semantic-ui-react";
import EncodeWord from "./EncodeWord";
import GuessWord from "./GuessWord";
import DecodeWord from "./DecodeWord";

function Hangman() {
  const transitionTime = 400;
  const [transition, setTransition] = useState(false);
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
          {view == "encodeWord" && <EncodeWord setView={handleUpdateOfView} />}
          {view == "guessWord" && <GuessWord setView={handleUpdateOfView} />}
          {view == "decodeWord" && <DecodeWord setView={handleUpdateOfView} />}
        </div>
      </Transition>
    </div>
  );
}

export default Hangman;
