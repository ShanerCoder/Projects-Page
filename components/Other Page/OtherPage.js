import { useEffect, useRef, useState } from "react";
import classes from "./OtherPage.module.css";
import SideBar from "../Layout/Sidebar/Sidebar";
import styles from "../../styles/Home.module.css";
import { Row, Col } from "react-bootstrap";
import ListOfForFunProjects from "./ListOfForFunProjects";
import Information from "../For Fun Designs/Information/Information";
import ProjectClicker from "../For Fun Designs/Project Clicker/PC";
import NumberGuessing from "../For Fun Designs/Number Guessing/NG";
import { Transition } from "semantic-ui-react";
import Hangman from "../For Fun Designs/Hangman/Hangman";

export default function OtherPage() {
  const transitionTime = 400;
  const transitionTimeoutRef = useRef(null);
  const [open, setOpen] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setOpen(typeof window !== "undefined" ? window.innerWidth > 720 : false);
  }, []);

  function handleUpdatedSelectedProject(project) {
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    setTransition(true);
    transitionTimeoutRef.current = setTimeout(() => {
      setSelectedProject(project);
      setTransition(false);
    }, transitionTime);
  }

  return (
    <div>
      <Row xs={12} style={{ margin: 0 }}>
        <Col
          xs={open ? 4 : 3}
          sm={open ? 3 : 1}
          className={classes.transitionPeriod}
        >
          <SideBar
            props={{
              open: open,
              setOpen: setOpen,
              children: (
                <ListOfForFunProjects
                  open={open}
                  selectedProject={selectedProject}
                  setSelectedProject={handleUpdatedSelectedProject}
                />
              ),
            }}
          />
        </Col>
        <Col
          xs={open ? 8 : 9}
          sm={open ? 9 : 11}
          className={classes.transitionPeriod}
        >
          <Transition
            animation="scale"
            duration={transitionTime}
            visible={!transition}
          >
            <div>
              {selectedProject == null && <Information />}
              {selectedProject == "PC" && <ProjectClicker />}
              {selectedProject == "NG" && <NumberGuessing />}
              {selectedProject == "HM" && <Hangman />}
            </div>
          </Transition>
        </Col>
      </Row>
    </div>
  );
}
