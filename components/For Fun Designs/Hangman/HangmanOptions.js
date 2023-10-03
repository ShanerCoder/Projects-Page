import { Col, Row } from "react-bootstrap";
import classes from "./Hangman.module.css";
import InputForm from "../../Display/DataForms/InputForm";
import { useState } from "react";

function HangmanOptions(props) {
  return (
    <>
      <InputForm title="Choose your Option">
        <Row className={classes.numberInput}>
          <Col xs={12} sm={6} md={4}>
            <button className={classes.button}>
              Create a word for others to guess
            </button>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <button className={classes.button}>Guess a Random Word </button>
          </Col>
          <Col xs={12} sm={12} md={4}>
            <button className={classes.button}>
              Guess a word created by someone else
            </button>
          </Col>
        </Row>
      </InputForm>
    </>
  );
}

export default HangmanOptions;
