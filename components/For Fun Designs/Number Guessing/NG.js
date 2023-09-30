import classes from "./NG.module.css";
import { useState } from "react";
import NumberRange from "./NumberRange";
import NumberGuess from "./NumberGuess";

function NumberGuessing() {
  const numberOfGuesses = 5;
  const [lowerRange, setLowerRange] = useState(0);
  const [upperRange, setUpperRange] = useState(0);
  const [answer, setAnswer] = useState("");

  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "2%" }}>
        <h1>Number Guessing</h1>
        <h3>
          You may enter two numbers within a range, and a number will randomly
          be selected.
        </h3>
        <h4>
          You have {numberOfGuesses} attempts to guess the number, good luck
          aiming for the highest range!
        </h4>
      </div>
      <div className={classes.inputFormDiv}>
        {answer == "" && (
          <NumberRange
            lowerRange={lowerRange}
            setLowerRange={setLowerRange}
            upperRange={upperRange}
            setUpperRange={setUpperRange}
            setAnswer={setAnswer}
          />
        )}
        {answer != "" && (
          <NumberGuess
            lowerRange={lowerRange}
            upperRange={upperRange}
            numberOfGuesses={numberOfGuesses}
            answer={answer}
            setAnswer={setAnswer}
          />
        )}
      </div>
    </>
  );
}

export default NumberGuessing;
