import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

export const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <h1 to="/" className={classes.logo}>
          Food App
        </h1>
        <nav>
          <ul>
            <li className={classes.menu_container}>
              <h1>userName</h1>
              <div className={classes.menu}>
                <h3 to="/profile">Profile</h3>
                <h2 to="/orders">Order</h2>
              </div>
            </li>
            <li>
              <h4 to="/cart">Cart</h4>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
