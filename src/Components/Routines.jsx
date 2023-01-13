import React, { useState, useEffect } from "react";
import { getRoutineByActivityId, getRoutines } from "../api/auth";
import { Link } from "react-router-dom";
import MyRoutines from "../Components/MyRoutines";
import { createRoutine } from "../api/auth";

const Routines = ({ token }) => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const routinesArr = async () => {
      const data = await getRoutines();
      setRoutines(data);
    };
    routinesArr();
  }, [routines]);

  const addThis = async (routineId) => {
    const retrieved = routines.filter((routine) => routine.id == routineId);
    console.log("This is retrieved:", retrieved);
    const name = `my ${retrieved[0].name}`;
    const goal = retrieved[0].goal;
    const isPublic = retrieved[0].isPublic;
    console.log("This is happening", token);
    const pushIt = await createRoutine({ token, name, goal, isPublic });
    // return retrieved;
  };

  return (
    <div>
      <Link to="/Users">Home</Link>
      <Link to="/my_routines">My Routines</Link>
      <Link to="/activities">Activities</Link>
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
          <p>
            <button onClick={() => addThis(routine.id)}>Add Routine</button>
          </p>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default Routines;
