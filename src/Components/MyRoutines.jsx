import React, { useState, useEffect } from "react";
import { getRoutines } from "../api/auth";

const MyRoutines = () => {
  const [routines, setRoutines] = useState([]);
  setRoutines(getRoutines());
  const myRoutines = routines.filter((routine) => {
    routine.creatorId = user.id;
  });
  return (
    <div>
      <div className="routine_list">
        <p>Name: {myRoutines.name}</p>
        <p>Goal: {myRoutines.goal}</p>
      </div>
    </div>
  );
};

export default MyRoutines;
