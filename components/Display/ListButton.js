import classes from "./ListButton.module.css";
function ListButton(props) {
  return (
    <div className={props.selected ? classes.selectedButton : classes.button}>
      <h4 style={{ margin: 0 }}>{props.title}</h4>
      {props.description && <p style={{ margin: 0 }}>{props.description}</p>}
    </div>
  );
}

export default ListButton;
