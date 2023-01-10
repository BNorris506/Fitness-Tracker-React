import React, { useState, useEffect } from "react";
import { getActivities } from "../api/auth";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  setActivities(getActivities());
  return (
    <div>
      <div className="activity_list">
        <p>Name: {activities.name}</p>
        <p>Description: {activities.description}</p>
      </div>
    </div>
  );
};

export default Activities;
