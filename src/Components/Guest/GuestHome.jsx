import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GuestHome = () => {
  const [routines, setRoutines] = useState([]);

  return (
    <div>
      <h1>Howdy Stranger</h1>
      <h2>Are you ready to crush it?!?!?!</h2>
      <Link to="/guestActivities">Activities</Link>
      <Link to="/guestRoutines">Routines</Link>
      <Link to="/register">Register</Link>
      <Link to="/">Log In</Link>
      <div>
        <h2>About us</h2>
      </div>
    </div>
  );
};

export default GuestHome;
