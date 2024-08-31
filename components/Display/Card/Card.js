import classes from "./Card.module.css";

function Card(props) {
  return (
    <a
      className={props.onClick != null ? classes.card : classes.inactiveCard }
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </a>
  );
}

export default Card;
