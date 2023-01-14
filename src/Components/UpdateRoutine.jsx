import React, { useState, useEffect } from "react";
import { patchRoutine } from "../api/auth";

const UpdateRoutineForm = ({
  token,
  routineId,
  myRoutines,
  setMyRoutines,
  setRoutineId,
}) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [thisRoutine, setThisRoutine] = useState("");
  const [thisGoal, setThisGoal] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const updatedRoutine = await patchRoutine(
        token,
        name,
        goal,
        isPublic,
        routineId
      );
      setName("");
      setGoal("");
      const myEditedRoutines = myRoutines.map((routine) => {
        if (routine.id === routineId) {
          return updatedRoutine;
        } else {
          return routine;
        }
      });
      setMyRoutines(myEditedRoutines);
      setRoutineId("");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getThisRoutine = () => {
      myRoutines.filter((routine) => {
        if (routine.id === routineId) {
          console.log("routine name", routine.name);
          setThisRoutine(routine.name);
          setThisGoal(routine.goal);
        }
      });
    };
    getThisRoutine();
  });

  return (
    <div className="flex-child newForm">
      <h4 className="update">Update your routine</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          name="name"
          value={name}
          type="text"
          className="input form"
          placeholder={thisRoutine}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <br></br>

        <input
          name="goal"
          value={goal}
          type="text"
          className="input form"
          placeholder={thisGoal}
          onChange={(e) => setGoal(e.target.value)}
        ></input>

        <br></br>
        <label>is public?</label>
        <input
          name="isPublic"
          value={isPublic}
          type="checkbox"
          default={false}
          onChange={(e) => setIsPublic(!isPublic)}
        ></input>

        <br></br>

        <button className="login submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateRoutineForm;
