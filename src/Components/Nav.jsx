import React from "react";
import { Link } from "react-router-dom";

export const Nav = ({ userData }) => {
  const Logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div>
      <h1>Fitness Tracker</h1>
      <h3> Logged in: {userData?.username}</h3>
      <button onClick={{ logout }}>Log Out</button>
      <Link to="/">Home</Link>
      <Link to="/login">Log In</Link>
      <Link to="/register">Register</Link>
      <Link to="/routines">Routines</Link>
      <Link to="/activities">Activities</Link>
      <Link to="/my_routines">My Routines</Link>
    </div>
  );
};
