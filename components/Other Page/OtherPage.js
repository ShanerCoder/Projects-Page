import { useState } from "react";
import classes from "./OtherPage.module.css";
import SideBar from "../Layout/Sidebar/Sidebar";
import { Row, Col } from "react-bootstrap";
import ListOfForFunProjects from "./ListOfForFunProjects";

export default function OtherPage() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <Row xs={12}>
        <Col
          xs={open ? 4 : 3}
          sm={open ? 3 : 1}
          className={classes.transitionPeriod}
        >
          <SideBar
            props={{
              open: open,
              setOpen: setOpen,
              children: <ListOfForFunProjects open={open} />,
            }}
          />
        </Col>
        <Col
          xs={open ? 8 : 9}
          sm={open ? 9 : 11}
          className={classes.transitionPeriod}
        >
          <h1>Other</h1>
        </Col>
      </Row>
    </div>
  );
}
