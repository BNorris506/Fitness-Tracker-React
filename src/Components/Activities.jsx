import React, { useState, useEffect } from "react";
import { getActivities } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import NewActivityForm from "./CreateActivity";

const Activities = ({ token, activities, setActivities }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <h1>Here are the activities</h1>
      <h2>Let's get pumpin'!</h2>
      <NewActivityForm
        activities={activities}
        setActivities={setActivities}
        token={token}
      />
      <Link to="/Users">Home</Link>
      <Link to="/my_routines">My Routines</Link>
      <Link to="/routines">Routines</Link>
      <button onClick={logout}>Log out</button>

      {activities.map((activity) => (
        <div key={activity.id} className="activity_list">
          <p>Name: {activity.name}</p>
          <p>Description: {activity.description}</p>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default Activities;
