import React from "react";

export const Title = ({ title, fontSize, margin }) => {
  return <h1 style={{ fontSize, margin, color: "black" }}>{title}</h1>;
};
