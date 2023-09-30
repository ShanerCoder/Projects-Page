import classes from "./NG.module.css";
import InputForm from "../../Display/DataForms/InputForm";
import { useState } from "react";
import NumberRange from "./NumberRange";
import NumberGuess from "./NumberGuess";

function NumberGuessing() {
  const numberOfGuesses = 5;
  const [lowerRange, setLowerRange] = useState(0);
  const [upperRange, setUpperRange] = useState(0);
  const [number, setNumber] = useState("");
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(numberOfGuesses);
  const [errorMessage, setErrorMessage] = useState("");
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [gameFinished, setGameFinished] = useState(false);

  function validateNumber(e) {
    if (e) e.preventDefault();
    if (guess < lowerRange || guess > upperRange) {
      setErrorMessage("Guess must be within range!");
      return;
    }
    setErrorMessage("");
    setAttempts(attempts - 1);
    if (guess == number) {
      setGameFinished(true);
      const newGuess = {
        guess: guess,
        result: "Correct",
      };
      setPreviousGuesses([...previousGuesses, newGuess]);
      return;
    }

    const newGuess = {
      guess: guess,
      result: guess > number ? "Lower" : "Higher",
    };
    setPreviousGuesses([...previousGuesses, newGuess]);

    if (attempts == 1) {
      setGameFinished(true);
    }
  }

  function resetNumber() {
    setNumber("");
    setGuess("");
    setGameFinished(false);
    setPreviousGuesses([]);
    setAttempts(5);
  }

  function generateNumber(e) {
    if (e) e.preventDefault();
    setLowerRange(parseInt(lowerRange, 10));
    setUpperRange(parseInt(upperRange, 10));
    if (lowerRange > upperRange) {
      setErrorMessage("Lower range must be less than upper range!");
    } else {
      setErrorMessage("");
      setNumber(
        Math.floor(Math.random() * (upperRange - lowerRange + 1)) + lowerRange
      );
    }
  }

  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "2%" }}>
        <h1>Number Guessing</h1>
        <h3>
          You may enter two numbers within a range, and a number will randomly
          be selected.
        </h3>
        <h4>
          You have 5 attempts to guess the number, good luck aiming for the
          highest range!
        </h4>
      </div>
      <div className={classes.inputFormDiv}>
        {number == "" && (
          <InputForm
            title="Enter Number Range"
            submitFunction={generateNumber}
            submitText={"Generate Number"}
          >
            <NumberRange
              submitFunction={generateNumber}
              lowerRange={lowerRange}
              setLowerRange={setLowerRange}
              upperRange={upperRange}
              setUpperRange={setUpperRange}
              errorMessage={errorMessage != "" ? errorMessage : null}
            />
          </InputForm>
        )}
        {number != "" && (
          <InputForm
            title="Guess the Number"
            submitFunction={!gameFinished && validateNumber}
            submitText={"Guess Number"}
            undoSubmitFunction={resetNumber}
            undoSubmitText="Generate New Number"
          >
            <NumberGuess
              guess={guess}
              setGuess={setGuess}
              submitFunction={!gameFinished && validateNumber}
              lowerRange={lowerRange}
              upperRange={upperRange}
              previousGuesses={previousGuesses}
              numberOfGuesses={numberOfGuesses}
              correctAnswer={gameFinished ? number : null}
              attempts={attempts}
              errorMessage={errorMessage != "" ? errorMessage : null}
            />
          </InputForm>
        )}
      </div>
    </>
  );
}

export default NumberGuessing;
