import { useEffect, useState } from "react";
import classes from "./ListButton.module.css";
function ListButton(props) {
  const [currentState, setCurrentState] = useState({
    title: props.title || "",
    description: props.description || "",
  });

  useEffect(() => {
    setTimeout(() => {
      const newState = {
        title: props.title || "",
        description: props.description || "",
      };
      setCurrentState(newState);
    }, 250);
  }, [props.title, props.description]);

  return (
    <div className={props.selected ? classes.selectedButton : classes.button}>
      <h4 style={{ margin: 0 }}>{currentState.title}</h4>
      {currentState.description && (
        <p style={{ margin: 0 }}>{currentState.description}</p>
      )}
    </div>
  );
}

export default ListButton;
