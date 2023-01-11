import React, { useState, useEffect } from "react";
import { getActivities } from "../../api/auth";
import { Link } from "react-router-dom";

const GuestActivities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const activitiesArr = async () => {
      const data = await getActivities();
      setActivities(data);
    };
    activitiesArr();
  }, []);
  return (
    <div>
      <h1>Here are the activities</h1>
      <h2>Let's get pumpin'!</h2>
      <Link to="/guest">Home</Link>
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

export default GuestActivities;
