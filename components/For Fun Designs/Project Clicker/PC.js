import { Col, Row } from "react-bootstrap";
import { useClickerContext } from "../../../Context/ClickerProvider";
import classes from "./PC.module.css";
import { useState } from "react";

function ProjectClicker() {
  const { clicks, setClicks } = useClickerContext();
  const [costOfUpgrade, setCostOfUpgrade] = useState(10);
  const [upgradeClicks, setUpgradeClicks] = useState(1);

  function upgradeClicksHandler() {
    if (clicks >= costOfUpgrade) {
      setClicks(clicks - costOfUpgrade);
      setUpgradeClicks(upgradeClicks + 1);
      setCostOfUpgrade(costOfUpgrade * 2);
    }
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ textAlign: "center" }}>Clicks: {clicks}</h1>
        <div>
          <button
            className={classes.clickerButton}
            onClick={() => setClicks(clicks + upgradeClicks)}
          >
            Click Me
          </button>
        </div>

        {clicks >= 10 && (
          <Row>
            <Col xs={6} md={4}>
              <button
                className={classes.upgradeButton}
                onClick={upgradeClicksHandler}
              >
                Upgrade Clicks - Cost: {costOfUpgrade}
              </button>
            </Col>
          </Row>
        )}
      </div>
    </>
  );
}

export default ProjectClicker;
