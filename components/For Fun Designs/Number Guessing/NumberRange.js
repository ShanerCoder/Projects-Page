import { Col, Row } from "react-bootstrap";
import classes from "./NG.module.css";
import InputForm from "../../Display/DataForms/InputForm";
import { useState } from "react";

function NumberRange(props) {
  const [errorMessage, setErrorMessage] = useState("");

  function generateNumber(e) {
    if (e) e.preventDefault();
    const lowerRange = parseInt(props.lowerRange, 10);
    const upperRange = parseInt(props.upperRange, 10);
    props.setLowerRange(lowerRange);
    props.setUpperRange(upperRange);
    if (lowerRange > upperRange) {
      setErrorMessage("Lower range must be less than upper range!");
    } else {
      setErrorMessage("");
      props.setAnswer(
        Math.floor(Math.random() * (upperRange - lowerRange + 1)) + lowerRange
      );
    }
  }

  return (
    <>
      <InputForm
        title="Enter Number Range"
        submitFunction={generateNumber}
        submitText={"Generate Number"}
      >
        <Row className={classes.numberInput}>
          <Col xs={6}>
            <form onSubmit={generateNumber}>
              <h4>Lower Range:</h4>
              <input
                type="number"
                placeholder="Enter a number"
                value={props.lowerRange}
                onChange={(e) => props.setLowerRange(e.target.value)}
              />
            </form>
          </Col>
          <Col xs={6}>
            <form onSubmit={generateNumber}>
              <h4>Upper Range:</h4>
              <input
                type="number"
                placeholder="Enter a number"
                value={props.upperRange}
                onChange={(e) => props.setUpperRange(e.target.value)}
              />
            </form>
          </Col>
        </Row>

        {errorMessage && <p className={classes.errorMessage}>{errorMessage}</p>}
      </InputForm>
    </>
  );
}

export default NumberRange;
