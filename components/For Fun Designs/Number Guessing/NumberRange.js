import { Col, Row } from "react-bootstrap";
import classes from "./NG.module.css";

function NumberRange(props) {
  return (
    <>
      <Row className={classes.numberInput}>
        <Col xs={6}>
          <form
            onSubmit={
              props.submitFunction
                ? props.submitFunction
                : (e) => {
                    e.preventDefault();
                    alert("test");
                  }
            }
          >
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
          <form
            onSubmit={
              props.submitFunction
                ? props.submitFunction
                : (e) => {
                    e.preventDefault();
                    alert("test");
                  }
            }
          >
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

      {props.errorMessage && (
        <p className={classes.errorMessage}>{props.errorMessage}</p>
      )}
    </>
  );
}

export default NumberRange;
