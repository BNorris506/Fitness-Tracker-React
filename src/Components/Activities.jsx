import React, { useState, useEffect } from "react";
import { getActivities } from "../api/auth";
import { Link } from "react-router-dom";
import NewActivityForm from "./CreateActivity";

const Activities = ({ token, activities, setActivities }) => {
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
