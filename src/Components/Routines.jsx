import React, { useState, useEffect } from "react";
import { getRoutineByActivityId, getRoutines } from "../api/auth";
import { Link } from "react-router-dom";

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const routinesArr = async () => {
      const data = await getRoutines();
      setRoutines(data);
    };
    routinesArr();
  }, [routines]);
  // console.log("I'm the routines:", routines);

  return (
    <div>
      <Link to="/Users">Home</Link>
      {routines.map((routine) => (
        <div key={routine.id} className="routine_list">
          <p>Name: {routine.name}</p>
          <p>Goal: {routine.goal}</p>
          <p>Creator Name: {routine.creatorName}</p>
          <p>
            <button
              onClick={async () => {
                // console.log("I'm the id", routine.id);
              }}
            >
              Add Routine
            </button>
          </p>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default Routines;
