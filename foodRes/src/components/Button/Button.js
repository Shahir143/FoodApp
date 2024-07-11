import React from "react";
import classes from "./Button.module.css";
export const Button = ({
  type,
  text,
  onClick,
  color,
  backgroundColor,
  fontSize,
  width,
  height,
}) => {
  return (
    <div className={classes.container}>
      <button
        style={{ color, backgroundColor, fontSize, height, width }}
        type={type}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  type: "button",
  text: "submit",
  backgroundColor: "#e72929",
  color: "white",
  fontSize: "1.3rem",
  width: "12rem",
  height: "3.5rem",
};
