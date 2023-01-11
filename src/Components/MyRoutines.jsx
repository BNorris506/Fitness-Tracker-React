import React, { useState, useEffect } from "react";
import { createRoutine, getRoutines, getRoutinesByUsername } from "../api/auth";
import { Link } from "react-router-dom";
import NewRoutineForm from "./NewRoutine";

const MyRoutines = ({ user }) => {
  const [myRoutines, setMyRoutines] = useState([]);

  useEffect(() => {
    const myRoutinesArr = async () => {
      const data = await getRoutinesByUsername(user.username);
      setMyRoutines(data);
    };
    myRoutinesArr();
  }, []);
  console.log("My routines:", myRoutines);

  return (
    <div>
      <h1>My Routines</h1>
      <Link to="/Users">Home</Link>
      <Link to="/newRoutine">Create Routine</Link>
      <div className="myroutine_list">
        {myRoutines.map((routine) => (
          <div key={routine.id}>
            <p>Name: {routine.name}</p>
            <p>Goal: {routine.goal}</p>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRoutines;
