import classes from "./Sidebar.module.css";

function SideBar({ props }) {
  return (
    <div className="flex">
      <div
        className={classes.sidebar}
        style={{ width: props.open ? "25rem" : "5rem" }}
      >
        <img
          src="/control.png"
          className={classes.control}
          onClick={() => {
            props.setOpen(!props.open);
          }}
          style={{
            transform: props.open ? "rotate(0deg)" : "rotate(180deg)",
          }}
        />
        <div style={{ textAlign: "center" }}>{props.children}</div>
      </div>
    </div>
  );
}

export default SideBar;
