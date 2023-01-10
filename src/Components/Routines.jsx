import React, { useState, useEffect } from "react";
import { getRoutines } from "../api/auth";

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const routinesArr = async () => {
      const data = await getRoutines();
      setRoutines(data);
    };
    routinesArr();
  }, []);
  console.log("I'm the routines:", routines);

  return (
    <div className="routine_list">
      {routines.map((routine) => (
        <div>
          <p>Name: {routine.name}</p>
          <p>Goal: {routine.goal}</p>
          <p>Creator Name: {routine.creatorName}</p>
        </div>
      ))}
    </div>
  );
};

export default Routines;
