import React, { useState } from "react";
import { attachActivityToRoutine } from "../api/auth";

const AddActivities = ({
  activities,
  setRoutineId,
  myRoutines,
  routineId,
  isActive,
  setIsActive,
}) => {
  const [click, setClick] = useState(false);
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  const [activityId, setActivityId] = useState("");
  //   const [isActive, setIsActive] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const newRoutine = attachActivityToRoutine(
        routineId,
        activityId,
        count,
        duration
      );
      console.log("This is new Routine", newRoutine);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsActive((current) => !current);
    const myArr = myRoutines.map((routine) => {
      routine;
    });
    //   setRoutineId(routine.id);
    console.log("I'm the Id", routineId);
    setClick(!click);
  };

  return (
    <div>
      <button className="login submit" onClick={(e) => handleClick(e)}>
        Add Activities
      </button>
      <div>
        {click &&
          activities.map((activity) => (
            <form key={activity.id} onSubmit={(e) => handleSubmit(e)}>
              <p>Name: {activity.name}</p>
              <p>Description: {activity.description}</p>
              <label>Count: {activity.count}</label>
              <input
                name="count"
                type="text"
                value={count}
                className="input form"
                onChange={(e) => {
                  setCount(e.target.value);
                  console.log(count);
                }}
              ></input>
              <br></br>
              <label>Duration: {activity.duration}</label>
              <input
                name="duration"
                type="text"
                value={duration}
                className="input form"
                onChange={(e) => {
                  setDuration(e.target.value);
                  console.log(duration);
                }}
              ></input>
              <br></br>
              <button
                className="login"
                type="submit"
                onClick={() => setActivityId(activity.id)}
              >
                Add to Routine
              </button>
            </form>
          ))}
      </div>
    </div>
  );
};

export default AddActivities;
