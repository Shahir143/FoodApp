import React from "react";
import classes from "./Input.module.css";
import { InputForm } from "../InputForm/InputForm";

function Input(
  { label, type, defaultValue, onChange, onBlur, name, error },
  ref
) {
  const getErrorMsg = () => {
    if (!error) return;
    if (error.message) return error.message;
    switch (error.type) {
      case "required":
        return "This field is required";
      case "minLength":
        return "Field is too short";
      default:
        return "something wrong went";
    }
  };
  return (
    <InputForm label={label}>
      <input
        defaultValue={defaultValue}
        className={classes.input}
        type={type}
        placeholder={label}
        ref={ref}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <div className={classes.error}>{getErrorMsg()}</div>}
    </InputForm>
  );
}

export default React.forwardRef(Input);
