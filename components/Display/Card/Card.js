import classes from "./Card.module.css";

function Card(props) {
  return (
    <a
      className={classes.card}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </a>
  );
}

export default Card;
