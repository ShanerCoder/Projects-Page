import { Col, Row } from "react-bootstrap";
import classes from "./Hangman.module.css";
import InputForm from "../../Display/DataForms/InputForm";

function HangmanOptions(props) {
  return (
    <>
      <InputForm title="Choose an option">
        <Row className={classes.numberInput}>
          <Col xs={12} sm={6} md={4}>
            <button
              className={classes.button}
              onClick={() => {
                props.setView("encodeWord");
              }}
            >
              Encode a word
            </button>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <button
              className={classes.button}
              onClick={() => {
                props.setView("guessWord");
              }}
            >
              Guess a Random Word
            </button>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <button
              className={classes.button}
              onClick={() => {
                props.setView("decodeWord");
              }}
            >
              Guess an encoded word
            </button>
          </Col>
        </Row>
      </InputForm>
    </>
  );
}

export default HangmanOptions;
