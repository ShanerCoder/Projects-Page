import { Col, Row } from "react-bootstrap";
import InputForm from "../../Display/DataForms/InputForm";
import classes from "./Hangman.module.css";
import { useEffect, useState } from "react";
import listOfWords from "./Words.json";

function GuessWord(props) {
  const words = listOfWords.words;
  const initialLives = 6;
  const [guess, setGuess] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [wordToGuess, setWordToGuess] = useState("");
  const [stringToShow, setStringToShow] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [lives, setLives] = useState(initialLives);
  const [gameFinished, setGameFinished] = useState(false);

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

  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

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
    if (string.indexOf("_") == -1) {
      setSuccessMessage("You guessed the word!");
      setGameFinished(true);
    }
    setStringToShow(string);
  }

  function showWord(e) {
    if (e) e.preventDefault();
    let string = "";
    for (const c of wordToGuess) string += c;
    setStringToShow(string);
  }

  function validateGuess() {
    if (guess == "") {
      setErrorMessage("Please enter a guess");
      return false;
    }
    const currentGuess = guess.toLowerCase();
    setGuess("");
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

    setGuessedLetters([...guessedLetters, currentGuess]);
    for (let i = 0; i < wordToGuess.length; i++) {
      if (currentGuess == wordToGuess[i].toLowerCase()) {
        setErrorMessage("");
        setSuccessMessage("Correct!");
        return true;
      }
    }
    setErrorMessage(guess + " is not in the word");
    setSuccessMessage("");

    if (lives <= 1) {
      setGameFinished(true);
      setErrorMessage("You lost!");
    }
    setLives(lives - 1);
    return false;
  }

  function returnToOptions(e) {
    if (e) e.preventDefault();
    props.setView("options");
  }

  return (
    <InputForm
      title="Enter your guess"
      submitFunction={
        !gameFinished
          ? (e) => {
              e.preventDefault();
              validateGuess();
            }
          : lives == 0
          ? (e) => {
              e.preventDefault();
              showWord();
            }
          : null
      }
      submitText={!gameFinished ? "Submit Guess" : "Show Word"}
      undoSubmitFunction={returnToOptions}
      undoSubmitText={"Return to selection"}
    >
      <Row className={classes.textInput}>
        <Col xs={12}>
          <h2>Remaining Lives: {lives}</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              validateGuess();
            }}
          >
            <h3>{stringToShow}</h3>

            <input
              type="text"
              placeholder="Enter a Letter"
              value={guess}
              maxLength={1}
              readOnly={gameFinished}
              onChange={(e) => setGuess(e.target.value)}
            />

            {successMessage && (
              <p className={classes.successMessage}>{successMessage}</p>
            )}
            {errorMessage && (
              <p className={classes.errorMessage}>{errorMessage}</p>
            )}

            <p>Guessed Letters: {guessedLetters.join(", ").toUpperCase()}</p>
          </form>
        </Col>
      </Row>
    </InputForm>
  );
}

export default GuessWord;
