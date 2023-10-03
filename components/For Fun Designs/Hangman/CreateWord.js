import { Col, Row } from "react-bootstrap";
import classes from "./Hangman.module.css";
import InputForm from "../../Display/DataForms/InputForm";
import { useState } from "react";
import { Transition } from "semantic-ui-react";

function CreateWord(props) {
  const transitionTime = 400;
  const [transition, setTransition] = useState(false);
  const [wordCreated, setWordCreated] = useState("");
  const [encodedWord, setEncodedWord] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [copyToClipboardText, setCopyToClipboardText] =
    useState("Copy to Clipboard");

  function handleEncode(string) {
    setTransition(true);
    setTimeout(() => {
      if (wordCreated == "") setEncodedWord("");
      else setEncodedWord(string);
      setTransition(false);
    }, transitionTime);
  }

  function validateWordCreated(e) {
    if (e) e.preventDefault();
    for (let i = 0; i < wordCreated.length; i++) {
      let c = wordCreated[i];
      if (!isNaN(c) && c != " ") {
        setErrorMessage("Word cannot contain numbers!");
        return false;
      }
    }
    setErrorMessage("");
    handleEncode(encodeString(wordCreated));
  }

  function encodeString(string) {
    return btoa(string);
  }

  function decodeString(string) {
    return atob(string);
  }

  function returnToOptions(e) {
    if (e) e.preventDefault();
    props.setView("options");
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(encodedWord);
    setCopyToClipboardText("Copied!");
    setTimeout(() => {
      setCopyToClipboardText("Copy to Clipboard");
    }, 1000);
  }

  return (
    <>
      <Transition
        animation="scale"
        duration={transitionTime}
        visible={!transition}
      >
        <div>
          {encodedWord == "" && (
            <InputForm
              title="Enter your word"
              submitFunction={validateWordCreated}
              submitText={"Submit Word"}
              undoSubmitFunction={returnToOptions}
              undoSubmitText={"Return to selection"}
            >
              <Row className={classes.textInput}>
                <Col xs={12}>
                  <form onSubmit={validateWordCreated}>
                    <h4>Word to be encoded:</h4>
                    <input
                      type="text"
                      placeholder="Enter a word"
                      value={wordCreated}
                      onChange={(e) => setWordCreated(e.target.value)}
                    />
                    {errorMessage && (
                      <p className={classes.errorMessage}>{errorMessage}</p>
                    )}
                  </form>
                </Col>
              </Row>
            </InputForm>
          )}
          {encodedWord != "" && (
            <InputForm
              title="Encoded word"
              submitFunction={returnToOptions}
              submitText={"Return to selection"}
              undoSubmitFunction={(e) => {
                e.preventDefault();
                setWordCreated("");
                handleEncode("");
              }}
              undoSubmitText={"Encode a new word"}
            >
              <Row className={classes.textInput}>
                <Col xs={12}>
                  <h4>Share this to your friends for them to guess:</h4>
                  <input
                    type="text"
                    placeholder="Enter a word"
                    value={encodedWord}
                    readOnly={true}
                    onChange={(e) => setWordCreated(e.target.value)}
                  />
                  <button
                    className={classes.copyToClipboard}
                    onClick={copyToClipboard}
                  >
                    {copyToClipboardText}
                  </button>
                </Col>
              </Row>
            </InputForm>
          )}
        </div>
      </Transition>
    </>
  );
}

export default CreateWord;
