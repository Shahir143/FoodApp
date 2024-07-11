import React from "react";
import classes from './InputForm.module.css'
export const InputForm = ({ label, bgColor, children }) => {
  return (
    <div className={classes.container} style={{ backgroundColor: bgColor }}>
      <label className={classes.label}>{label}</label>
      <div className={classes.content}>{children}</div>
    </div>
  );
};
