import React, { useState, useEffect } from "react";
import { getRoutines } from "../../api/auth";
import { Link } from "react-router-dom";

const GuestRoutines = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const routinesArr = async () => {
      const data = await getRoutines();
      setRoutines(data);
    };
    routinesArr();
  }, []);
  // console.log("I'm the routines:", routines);

  return (
    <div>
      <Link to="/guest">Home</Link>
      {routines.map((routine) => (
        <div key={routine.id} className="routine_list">
          <p>Name: {routine.name}</p>
          <p>Goal: {routine.goal}</p>
          <p>Creator Name: {routine.creatorName}</p>
          {routine.activities.map((activity) => (
            <div key={activity.id}>
              <p>
                <strong>Activity</strong>
              </p>
              <p>Name: {activity.name}</p>
              <p>Description: {activity.description}</p>
              <p>Count: {activity.count}</p>
              <p>Duration: {activity.duration}</p>
            </div>
          ))}
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default GuestRoutines;
