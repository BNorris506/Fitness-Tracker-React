import React, { useState, useEffect } from "react";
import { getRoutinesByUsername } from "../api/auth";
import { Link } from "react-router-dom";
import NewRoutineForm from "../Components/NewRoutine";
import { deleteRoutine } from "../api/auth";
import UpdateRoutineForm from "./UpdateRoutine";
import AddActivities from "./AddActivities";

const MyRoutines = ({ user, token, activities }) => {
  const [myRoutines, setMyRoutines] = useState([]);
  const [routineId, setRoutineId] = useState("");

  useEffect(() => {
    const myRoutinesArr = async () => {
      console.log("I'm the user MyRoutines line 15", user);
      if (user !== undefined) {
        const data = await getRoutinesByUsername(user?.username);
        console.log("This is data myRoutines line 18", data);
        if (!data.error) {
          setMyRoutines(data);
          console.log("These are myRoutines line 21", myRoutines);
        }
      }
    };
    myRoutinesArr();
  }, []);

  const deleteThis = async (routineId) => {
    const result = await deleteRoutine(token, routineId);
    if (result) {
      const myNewRoutines = myRoutines?.filter(
        (routine) => routine.id !== routineId
      );
      setMyRoutines(myNewRoutines);
    }
  };

  return (
    <div>
      <h1>My Routines</h1>
      {routineId ? (
        <UpdateRoutineForm
          token={token}
          routineId={routineId}
          myRoutines={myRoutines}
          setMyRoutines={setMyRoutines}
          setRoutineId={setRoutineId}
        />
      ) : (
        <NewRoutineForm
          token={token}
          myRoutines={myRoutines}
          setMyRoutines={setMyRoutines}
          user={user}
        />
      )}
      <Link to="/Users">Home</Link>
      <Link to="/activities">Activities</Link>
      <Link to="/routines">Routines</Link>
      <div className="myroutine_list">
        {myRoutines?.map((routine) => (
          <div key={routine.id}>
            <p>Name: {routine.name}</p>
            <p>Goal: {routine.goal}</p>
            <p>Activities: </p>
            <button onClick={() => deleteThis(routine.id)}>Delete</button>
            <button onClick={() => setRoutineId(routine.id)}>Edit</button>
            <AddActivities
              activities={activities}
              routineId={routineId}
              setRoutineId={setRoutineId}
              myRoutines={myRoutines}
            />
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRoutines;
