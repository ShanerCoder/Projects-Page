import { Col, Row } from "react-bootstrap";
import classes from "./NG.module.css";

function NumberGuess(props) {
  function generatePreviousAttempts() {
    const attempts = [];
    for (let i = 0; i < props.numberOfGuesses; i++) {
      if (props.previousGuesses[i] == null) {
        attempts.push(<p key={i}>Attempt {i + 1}: N/A - N/A</p>);
      } else {
        attempts.push(
          <p key={i}>
            Attempt {i + 1}: {props.previousGuesses[i].guess} -{" "}
            {props.previousGuesses[i].result}
          </p>
        );
      }
    }
    return attempts;
  }

  return (
    <>
      <h3>
        Range between {props.lowerRange} & {props.upperRange}
      </h3>
      {generatePreviousAttempts()}
      <h3>Attempts left: {props.attempts}</h3>
      {props.correctAnswer && (
        <h3>Correct answer was: {props.correctAnswer}</h3>
      )}
      <form
        onSubmit={
          props.submitFunction
            ? props.submitFunction
            : (e) => e.preventDefault()
        }
      >
        <Row className={classes.numberInput}>
          <Col xs={12}>
            <input
              type="number"
              placeholder="Enter a number"
              value={props.guess}
              onChange={(e) => props.setGuess(e.target.value)}
            />
          </Col>
        </Row>
      </form>

      {props.errorMessage && (
        <p className={classes.errorMessage}>{props.errorMessage}</p>
      )}
    </>
  );
}

export default NumberGuess;
