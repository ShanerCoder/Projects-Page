import { Col, Row } from "react-bootstrap";
import classes from "./NG.module.css";
import InputForm from "../../Display/DataForms/InputForm";
import { useState } from "react";

function NumberGuess(props) {
  const [attempts, setAttempts] = useState(props.numberOfGuesses);
  const [errorMessage, setErrorMessage] = useState("");
  const [guess, setGuess] = useState("");
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [gameFinished, setGameFinished] = useState(false);

  function resetGame(e) {
    if (e) e.preventDefault();
    props.setAnswer("");
  }

  function validateNumber(e) {
    if (e) e.preventDefault();
    if (guess < props.lowerRange || guess > props.upperRange) {
      setErrorMessage("Guess must be within range!");
      return;
    }
    setErrorMessage("");
    setAttempts(attempts - 1);
    if (guess == props.answer) {
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
      result: guess > props.answer ? "Lower" : "Higher",
    };
    setPreviousGuesses([...previousGuesses, newGuess]);

    if (attempts == 1) {
      setGameFinished(true);
    }
  }

  function generatePreviousAttempts() {
    const attempts = [];
    for (let i = 0; i < props.numberOfGuesses; i++) {
      if (previousGuesses[i] == null) {
        attempts.push(<p key={i}>Attempt {i + 1}: N/A - N/A</p>);
      } else {
        attempts.push(
          <p key={i}>
            Attempt {i + 1}: {previousGuesses[i].guess} -{" "}
            {previousGuesses[i].result}
          </p>
        );
      }
    }
    return attempts;
  }

  return (
    <>
      <InputForm
        title="Guess the Number"
        submitFunction={!gameFinished && validateNumber}
        submitText={"Guess Number"}
        undoSubmitFunction={resetGame}
        undoSubmitText="Generate New Number"
      >
        <h3>
          Range between {props.lowerRange} & {props.upperRange}
        </h3>
        {generatePreviousAttempts()}
        <h3>Attempts left: {attempts}</h3>
        {gameFinished && <h3>Correct answer was: {props.answer}</h3>}
        <form
          onSubmit={!gameFinished ? validateNumber : (e) => e.preventDefault()}
        >
          <Row className={classes.numberInput}>
            <Col xs={12}>
              <input
                type="number"
                placeholder="Enter a number"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
              />
            </Col>
          </Row>
        </form>

        {errorMessage && <p className={classes.errorMessage}>{errorMessage}</p>}
      </InputForm>
    </>
  );
}

export default NumberGuess;
