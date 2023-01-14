import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GuestHome = () => {
  const [routines, setRoutines] = useState([]);

  return (
    <div className="home">
      <div className="navbar">
        <Link to="/guestActivities">Activities</Link>
        <Link to="/guestRoutines">Routines</Link>
        <Link to="/register">Register</Link>
        <Link to="/">Log In</Link>
      </div>
      <div className="title">
        <h1>Howdy Stranger</h1>
      </div>
      <div>
        <h2>About us</h2>
        <p>We believe in making fitness your own</p>
        <p>
          Here, we provide you with the ability to manage your routines and
          activities
        </p>
        <p>We believe exercise should be customizeable!</p>
        <p>Register today to start personalizing YOUR routine </p>
        <br></br>
        <h2>Now...</h2>
        <h2>Are you ready to crush it?!?!?!</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYRAtjqmDhtE28lxYd8x3LgDSu4y_uuUSDUA&usqp=CAU" />
      </div>
    </div>
  );
};

export default GuestHome;
