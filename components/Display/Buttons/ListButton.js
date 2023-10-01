import { useEffect, useState } from "react";
import classes from "./ListButton.module.css";
function ListButton(props) {
  const [currentTitle, setCurrentTitle] = useState(props.title);

  useEffect(() => {
    setTimeout(() => {
      setCurrentTitle(props.title);
    }, 250);
  }, [props.title]);

  return (
    <div className={props.selected ? classes.selectedButton : classes.button}>
      <h4 style={{ margin: 0 }}>{currentTitle}</h4>
      {props.description && <p style={{ margin: 0 }}>{props.description}</p>}
    </div>
  );
}

export default ListButton;
