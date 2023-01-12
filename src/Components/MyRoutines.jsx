import React, { useState, useEffect } from "react";
import { getRoutinesByUsername } from "../api/auth";
import { Link } from "react-router-dom";
import NewRoutineForm from "../Components/NewRoutine";
import { deleteRoutine } from "../api/auth";
import { patchRoutine } from "../api/auth";

const MyRoutines = ({ user, token }) => {
  const [myRoutines, setMyRoutines] = useState([]);
  const [routineId, setRoutineId] = useState("");

  useEffect(() => {
    const myRoutinesArr = async () => {
      const data = await getRoutinesByUsername(user.username);
      if (data) {
        setMyRoutines(data);
      }
    };
    myRoutinesArr();
  }, [user]);
  // console.log("My routines:", myRoutines);

  const deleteThis = async (routineId) => {
    const result = await deleteRoutine(token, routineId);
    if (result) {
      const myNewRoutines = myRoutines.filter(
        (routine) => routine.id !== routineId
      );
      setMyRoutines(myNewRoutines);
    }
  };

  const editThis = async (token, name, goal, isPublic, routineId) => {
    const data = await patchRoutine(token, name, goal, isPublic, routineId);
    if (data && data.name) {
      const myEditedPost = myRoutines.map((routine) => {
        if (routine.id === routineId) {
          return data;
        } else {
          return routine;
        }
      });
      setMyRoutines(myEditedPost);
    }
  };

  return (
    <div>
      <h1>My Routines</h1>
      <NewRoutineForm
        token={token}
        myRoutines={myRoutines}
        setMyRoutines={setMyRoutines}
        user={user}
      />
      <Link to="/Users">Home</Link>
      <Link to="/activities">Activities</Link>
      <Link to="/routines">Routines</Link>
      <div className="myroutine_list">
        {myRoutines.map((routine) => (
          <div key={routine.id}>
            {/* {console.log("This is routine:", routine)} */}
            <p>Name: {routine.name}</p>
            <p>Goal: {routine.goal}</p>
            <p>Activities: {routine.activities}</p>
            <button onClick={() => deleteThis(routine.id)}>Delete</button>
            <button onClick={() => editThis}>Edit</button>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRoutines;
