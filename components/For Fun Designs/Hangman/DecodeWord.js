import { useState } from "react";
import { Transition } from "semantic-ui-react";
import InputForm from "../../Display/DataForms/InputForm";
import classes from "./Hangman.module.css";
import { Col, Row } from "react-bootstrap";
import GuessWord from "./GuessWord";

function DecodeWord(props) {
  const maxLength = 50;
  const transitionTime = 400;
  const [transition, setTransition] = useState(false);
  const [encodedWord, setEncodedWord] = useState("");
  const [decodedWord, setDecodedWord] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleUpdateOfDecodedWord(word) {
    setTransition(true);
    setTimeout(() => {
      setDecodedWord(word);
      setTransition(false);
    }, transitionTime);
  }

  function decryptString(e) {
    if (e) e.preventDefault();
    try {
      const decodedWord = atob(encodedWord);
      const containsNonAlphabetic = /[^a-zA-Z\s]/.test(decodedWord);
      if (decodedWord.length > maxLength)
        throw new Error("Word is too long to decode.");
      if (containsNonAlphabetic)
        throw new Error("Encoded value is not in correct format.");
      handleUpdateOfDecodedWord(decodedWord);
    } catch (e) {
      setDecodedWord("");
      setErrorMessage("Encoded word is invalid: " + e.message);
    }
  }

  function returnToOptions(e) {
    if (e) e.preventDefault();
    props.setView("options");
  }

  return (
    <Transition
      animation="scale"
      duration={transitionTime}
      visible={!transition}
    >
      <div>
        {decodedWord == "" && (
          <InputForm
            title="Enter your encoded word"
            submitFunction={decryptString}
            submitText={"Decode Word"}
            undoSubmitFunction={returnToOptions}
            undoSubmitText={"Return to selection"}
          >
            <Row className={classes.textInput}>
              <Col xs={12}>
                <form onSubmit={decryptString}>
                  <h4>Word to be decoded:</h4>
                  <input
                    type="text"
                    placeholder="Enter a word"
                    value={encodedWord}
                    onChange={(e) => setEncodedWord(e.target.value)}
                  />
                  {errorMessage && (
                    <p className={classes.errorMessage}>{errorMessage}</p>
                  )}
                </form>
              </Col>
            </Row>
          </InputForm>
        )}
        {decodedWord != "" && (
          <GuessWord wordToGuess={decodedWord} setView={props.setView} />
        )}
      </div>
    </Transition>
  );
}

export default DecodeWord;
