import React from "react";
import { useLoading } from "../../hooks/useLoading";
import classes from "./Loading.module.css";

export default function Loading() {
  const { isLoading } = useLoading();
  if (!isLoading) return;

  return (
    <div className={classes.container}>
      <div className={classes.items}>
        <img />
        <h1>Loading...</h1>
      </div>
    </div>
  );
}
