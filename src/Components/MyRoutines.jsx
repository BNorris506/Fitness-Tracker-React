import React, { useState, useEffect } from "react";
import { getRoutinesByUsername } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import NewRoutineForm from "../Components/NewRoutine";
import { deleteRoutine, deleteRoutineActivity } from "../api/auth";
import UpdateRoutineForm from "./UpdateRoutine";
import AddActivities from "./AddActivities";

const MyRoutines = ({ user, token, activities }) => {
  const [myRoutines, setMyRoutines] = useState([]);
  const [routineId, setRoutineId] = useState("");
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

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

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const deleteThis = async (routineId) => {
    const result = await deleteRoutine(token, routineId);
    if (result) {
      const myNewRoutines = myRoutines?.filter(
        (routine) => routine.id !== routineId
      );
      setMyRoutines(myNewRoutines);
    }
  };

  const deleteThisActivity = async (routineActivityId) => {
    const token = localStorage.getItem("token");
    const result = await deleteRoutineActivity(routineActivityId, token);
    if (result) {
      const myNewActivities = myRoutines?.filter(
        (activity) => activity.id !== routineActivityId
      );
      setMyRoutines(myNewActivities);
    }
  };

  return (
    <div className="home">
      <div className="navbar">
        <Link to="/Users">Home</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/routines">Routines</Link>
        <button className="login" onClick={logout}>
          Log out
        </button>
      </div>
      <h1>My Routines</h1>
      <div className="parent">
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
        <div
          style={{ marginLeft: isActive ? "37px" : "" }}
          className="flex-child routines"
        >
          {myRoutines?.map((routine) => (
            <div key={routine.id}>
              <p>Name: {routine.name}</p>
              <p>Goal: {routine.goal}</p>
              {routine.activities?.map((activity) => (
                <div key={activity.id}>
                  <button
                    className="login danger"
                    onClick={() => deleteThisActivity(activity.id)}
                  >
                    Delete Activity
                  </button>
                  <p>
                    <strong>Activity</strong>
                  </p>
                  <p>Name: {activity.name}</p>
                  <p>Description: {activity.description}</p>
                  <p>Count: {activity.count}</p>
                  <p>Duration: {activity.duration}</p>
                </div>
              ))}

              <button
                className="login danger"
                onClick={() => deleteThis(routine.id)}
              >
                DELETE
              </button>
              <button
                className="login"
                onClick={() => setRoutineId(routine.id)}
              >
                Edit
              </button>
              <AddActivities
                setIsActive={setIsActive}
                isActive={isActive}
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
    </div>
  );
};

export default MyRoutines;
