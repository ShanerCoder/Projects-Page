import { Col, Row } from "react-bootstrap";
import classes from "./Hangman.module.css";
import InputForm from "../../Display/DataForms/InputForm";

function HangmanOptions(props) {
  return (
    <>
      <InputForm title="Choose your Option">
        <Row className={classes.numberInput}>
          <Col xs={12} sm={6} md={4}>
            <button
              className={classes.button}
              onClick={() => {
                props.setView("createWord");
              }}
            >
              Encode a word
            </button>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <button className={classes.button}>Guess a Random Word </button>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <button className={classes.button}>Guess an encoded word</button>
          </Col>
        </Row>
      </InputForm>
    </>
  );
}

export default HangmanOptions;
