import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const { user, logout } = useAuth;

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <h1 to="/" className={classes.logo}>
          Food App
        </h1>
        <nav>
          <ul>
            {user ? (
              <li className={classes.menu_container}>
                <Link to="/dashboard">{user.name}</Link>
                <div className={classes.menu}>
                  <Link to="/profile">Profile</Link>
                  <Link to="/orders">Order</Link>
                  <a onClick={logout}>Logout</a>
                </div>
              </li>
            ) : (
              <Link to="/login">Login</Link>
            )}

            <li>
              <Link to="/cart">Cart </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
