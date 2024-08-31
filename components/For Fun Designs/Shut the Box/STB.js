import classes from "./STB.module.css";
import { useState } from "react";
import Card from "../../Display/Card/Card";

function ShutTheBox() {
  const [firstDiceRoll, setFirstDiceRoll] = useState();
  const [secondDiceRoll, setSecondDiceRoll] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState();
  const cards = Array.from({ length: 9 }, (_, i) => i + 1);
  const [openBoxes, setOpenBoxes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const [totalToClose, setTotalToClose] = useState();
  const [highscore, setHighscore] = useState();

  function closeBoxes() {
    if (totalToClose > 0) {
      return setErrorMessage(
        `You still have ${totalToClose} in value to close!`
      );
    }
    setOpenBoxes((prevBoxes) =>
      prevBoxes.filter((num) => !selectedBoxes.includes(num))
    );
    if (openBoxes.length == 0) {
      setSuccessMessage("You win!");
    }
    resetDiceRolls();
  }

  function selectBox(boxNumber) {
    if (!firstDiceRoll) return;
    if (selectedBoxes.includes(boxNumber)) {
      setSelectedBoxes((prevSelected) =>
        prevSelected.filter((num) => num !== boxNumber)
      );
      setTotalToClose((prevTotal) => prevTotal + boxNumber);
    } else {
      const newTotal = totalToClose - boxNumber;
      if (newTotal < 0) {
        setErrorMessage("Total is less than " + boxNumber);
        return;
      }
      setSelectedBoxes((prevSelected) => [...prevSelected, boxNumber]);
      setTotalToClose(newTotal);
    }
    setErrorMessage(null);
  }

  function rollDice() {
    const min = 1;
    const max = 6;
    const rollOne = Math.floor(Math.random() * (max - min + 1)) + min;
    const rollTwo = Math.floor(Math.random() * (max - min + 1)) + min;
    setFirstDiceRoll(rollOne);
    if (openBoxes.length == 1 && openBoxes.includes(1)) {
      setTotalToClose(rollOne);
      setSecondDiceRoll("N/A");
      return;
    }
    setSecondDiceRoll(rollTwo);
    setTotalToClose(rollOne + rollTwo);
  }

  function restartGame() {
    let total = 0;
    openBoxes.forEach((num) => (total += num));
    const prevHighScore = isNaN(highscore) ? 100 : highscore;
    setHighscore(Math.min(prevHighScore, total));
    setOpenBoxes([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    resetDiceRolls();
    setErrorMessage();
    setSuccessMessage();
  }

  function resetDiceRolls() {
    setSelectedBoxes([]);
    setFirstDiceRoll();
    setSecondDiceRoll();
    setTotalToClose();
  }

  return (
    <>
      <div className={classes.mainDiv}>
        <h1>
          Shut the Box{!isNaN(highscore) && ` - High Score: ${highscore}`}
        </h1>
        <div className={classes.boxContainer}>
          {cards.map((num) => {
            const isOpen = openBoxes.includes(num);
            const isSelected = selectedBoxes.includes(num);
            return (
              <div
                key={num}
                className={`${classes.box} ${
                  isOpen ? classes.openBox : classes.closedBox
                } ${isSelected ? classes.selectedBox : ""}`}
                onClick={() => isOpen && selectBox(num)} // Allow selection only if the box is open
              >
                {isOpen && <Card>{num}</Card>}
              </div>
            );
          })}
        </div>

        <p className={classes.diceRollText}>
          Dice Roll:{" "}
          {firstDiceRoll && secondDiceRoll
            ? `${firstDiceRoll} - ${secondDiceRoll}`
            : "? - ?"}
        </p>
        <p className={classes.diceRollText}>
          Total left to close: {totalToClose >= 0 ? totalToClose : "?"}
        </p>

        {errorMessage && <p className={classes.errorMessage}>{errorMessage}</p>}

        <button
          className={classes.rollDiceButton}
          onClick={rollDice}
          disabled={(firstDiceRoll && secondDiceRoll) || successMessage}
        >
          Roll Dice
        </button>

        <button
          className={classes.closeBoxesButton}
          onClick={closeBoxes}
          disabled={selectedBoxes.length === 0}
        >
          Close Selected Boxes
        </button>

        <button className={classes.closeBoxesButton} onClick={restartGame}>
          Restart Game
        </button>
      </div>
    </>
  );
}

export default ShutTheBox;
