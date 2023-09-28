import { useState } from "react";
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
        {props.children}
      </div>
    </div>
  );
}

export default SideBar;
