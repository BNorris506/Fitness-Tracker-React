import React from "react";
import { Link } from "react-router-dom";
import LogIn from "./LogIn";

const Welcome = ({ setToken }) => {
  return (
    <div className="container">
      <h1>Welcome</h1>
      <h2> to Fitness Tracker</h2>
      <LogIn setToken={setToken} />
      <div className="links">
        <Link to="/register">New? Register here!</Link>
        <Link to="/guest">Continue as guest</Link>
      </div>
    </div>
  );
};

export default Welcome;
