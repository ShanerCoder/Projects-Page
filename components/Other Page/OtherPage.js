import { useEffect, useState } from "react";
import classes from "./OtherPage.module.css";
import SideBar from "../Layout/Sidebar/Sidebar";
import { Row, Col } from "react-bootstrap";
import ListOfForFunProjects from "./ListOfForFunProjects";
import Information from "../For Fun Designs/Information/Information";
import ProjectClicker from "../For Fun Designs/Project Clicker/PC";
import NumberGuessing from "../For Fun Designs/Number Guessing/NG";

export default function OtherPage() {
  const [open, setOpen] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setOpen(typeof window !== "undefined" ? window.innerWidth > 720 : false);
  }, []);

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
                  setSelectedProject={setSelectedProject}
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
          <div>
            {selectedProject == null && <Information />}
            {selectedProject == "PC" && <ProjectClicker />}
            {selectedProject == "NG" && <NumberGuessing />}
          </div>
        </Col>
      </Row>
    </div>
  );
}
