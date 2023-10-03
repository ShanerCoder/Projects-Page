import { Col, Row } from "react-bootstrap";
import InputForm from "../../Display/DataForms/InputForm";
import classes from "./Hangman.module.css";
import { useEffect, useState } from "react";

function GuessWord(props) {
  const [guess, setGuess] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [wordToGuess, setWordToGuess] = useState("");
  const [stringToShow, setStringToShow] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);

  useEffect(() => {
    if (props.wordToGuess) {
      setWordToGuess(props.wordToGuess);
      updateStringToShow(props.wordToGuess);
      return;
    }
    const randomWord = getRandomWord();
    setWordToGuess(randomWord);
    updateStringToShow(randomWord);
  }, []);

  useEffect(() => {
    updateStringToShow(wordToGuess);
  }, [guessedLetters, wordToGuess]);

  function updateStringToShow(word) {
    if (!word) return;
    let string = "";
    if (guessedLetters.includes(word[0].toLowerCase())) string += word[0] + "";
    else string += "_ ";

    for (let i = 1; i < word.length; i++) {
      let c = word[i];
      if (guessedLetters.includes(c.toLowerCase())) string += c;
      else if (word[i] == " ") string += "  ";
      else string += " _";
    }
    setStringToShow(string);
  }

  function validateGuess(e) {
    if (e) e.preventDefault();
    if (guess == "") {
      setErrorMessage("Please enter a guess");
      return false;
    }
    const currentGuess = guess.toLowerCase();
    if (currentGuess.length > 1) {
      setErrorMessage("Please enter only one character");
      return false;
    }
    if (currentGuess == " ") {
      setErrorMessage("Please enter a valid character");
      return false;
    }
    if (guessedLetters.includes(currentGuess)) {
      setErrorMessage("You already guessed that letter");
      return false;
    }
    for (let i = 0; i < wordToGuess.length; i++) {
      if (currentGuess == wordToGuess[i].toLowerCase()) {
        setErrorMessage("");
        setGuessedLetters([...guessedLetters, currentGuess]);
        return true;
      }
    }
    setErrorMessage("Incorrect guess");
    return false;
  }

  function returnToOptions(e) {
    if (e) e.preventDefault();
    props.setView("options");
  }

  return (
    <InputForm
      title="Enter your guess"
      submitFunction={validateGuess}
      submitText={"Submit Word"}
      undoSubmitFunction={returnToOptions}
      undoSubmitText={"Return to selection"}
    >
      <Row className={classes.textInput}>
        <Col xs={12}>
          <form onSubmit={validateGuess}>
            <h3>{stringToShow}</h3>

            <input
              type="text"
              placeholder="Enter a word"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
            />
            {errorMessage && (
              <p className={classes.errorMessage}>{errorMessage}</p>
            )}
          </form>
        </Col>
      </Row>
    </InputForm>
  );
}

export default GuessWord;
