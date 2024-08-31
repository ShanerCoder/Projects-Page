import classes from "./PC.module.css";
import { useState } from "react";

function ProjectClicker() {
  const { clicks, setClicks } = useState(0);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ textAlign: "center" }}>Clicks: {clicks}</h1>
      </div>
    </>
  );
}

export default ProjectClicker;
