import classes from "./STB.module.css";
import { useState } from "react";
import Card from "../../Display/Card/Card";
import Image from "next/image";

function ShutTheBox() {
  const diceRollTimeInMS = 500;
  const diceImageChangeTimeInMS = 100;
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
    const boxesRemaining = openBoxes.length - selectedBoxes.length;
    setOpenBoxes((prevBoxes) =>
      prevBoxes.filter((num) => !selectedBoxes.includes(num))
    );
    if (boxesRemaining == 0) {
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

    const rollDiceWithDelay = (setDiceRollCallback) => {
      let intervalCount = 0;
      const intervalId = setInterval(() => {
        const randomRoll = Math.floor(Math.random() * (max - min + 1)) + min;
        setDiceRollCallback(randomRoll);
        intervalCount++;
        if (intervalCount >= diceRollTimeInMS / diceImageChangeTimeInMS) {
          clearInterval(intervalId);
        }
      }, diceImageChangeTimeInMS);
    };

    rollDiceWithDelay(setFirstDiceRoll);

    if (openBoxes.length === 1 && openBoxes.includes(1)) {
      setTimeout(() => {
        const finalRoll = Math.floor(Math.random() * (max - min + 1)) + min;
        setFirstDiceRoll(finalRoll);
        setTotalToClose(finalRoll);
        setSecondDiceRoll("N/A");
      }, diceRollTimeInMS);
      return;
    }

    rollDiceWithDelay(setSecondDiceRoll);

    setTimeout(() => {
      const finalRollOne = Math.floor(Math.random() * (max - min + 1)) + min;
      const finalRollTwo = Math.floor(Math.random() * (max - min + 1)) + min;

      setFirstDiceRoll(finalRollOne);
      setSecondDiceRoll(finalRollTwo);
      setTotalToClose(finalRollOne + finalRollTwo);
    }, diceRollTimeInMS);
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

  function renderDice() {
    const diceImages = [
      "/dice/unknown.png", // index 0, used as default
      "/dice/1.png",
      "/dice/2.png",
      "/dice/3.png",
      "/dice/4.png",
      "/dice/5.png",
      "/dice/6.png",
    ];

    const diceOneUrl = diceImages[firstDiceRoll] || diceImages[0];
    const diceTwoUrl =
      secondDiceRoll === "N/A"
        ? null
        : diceImages[secondDiceRoll] || diceImages[0];

    const diceOneRender = (
      <Image
        src={diceOneUrl}
        alt="Dice One"
        width={500}
        height={300}
        className={classes.diceImage}
      />
    );

    if (!diceTwoUrl) return diceOneRender;

    const diceTwoRender = (
      <Image
        src={diceTwoUrl}
        alt="Dice Two"
        width={500}
        height={300}
        className={classes.diceImage}
      />
    );

    return (
      <div className={classes.diceRender}>
        {diceOneRender}
        {diceTwoRender}
      </div>
    );
  }

  return (
    <div className={classes.mainDiv}>
      <h1>Shut the Box{!isNaN(highscore) && ` - High Score: ${highscore}`}</h1>
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

      {successMessage ? (
        <p className={classes.successMessage}>{successMessage}</p>
      ) : (
        <>
          {renderDice()}
          <p className={classes.diceRollText}>
            Total left to close: {totalToClose >= 0 ? totalToClose : "?"}
          </p>
          {errorMessage && (
            <p className={classes.errorMessage}>{errorMessage}</p>
          )}
        </>
      )}

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
  );
}

export default ShutTheBox;
