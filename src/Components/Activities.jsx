import React, { useState, useEffect } from "react";
import { getActivities } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import NewActivityForm from "./NewActivityForm";

const Activities = ({ token, activities, setActivities }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="home">
      <div className="navbar">
        <Link to="/Users">Home</Link>
        <Link to="/my_routines">My Routines</Link>
        <Link to="/routines">Routines</Link>
        <button className="login" onClick={logout}>
          Log out
        </button>
      </div>
      <h1>Here are the activities</h1>
      <div className="parent">
        <NewActivityForm
          activities={activities}
          setActivities={setActivities}
          token={token}
        />
        <div className="flex-child activities">
          {activities.map((activity) => (
            <div key={activity.id} className="activity_list">
              <p>Name: {activity.name}</p>
              <p>Description: {activity.description}</p>
              <br></br>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
