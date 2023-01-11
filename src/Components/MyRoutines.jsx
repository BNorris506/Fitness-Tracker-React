import React, { useState, useEffect } from "react";
import { getRoutines, getRoutinesByUsername } from "../api/auth";

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
      <div className="myroutine_list">
        {myRoutines.map((routine) => (
          <div>
            <p>Name: {routine.name}</p>
            <p>Goal: {routine.goal}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRoutines;
