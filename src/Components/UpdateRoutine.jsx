import React, { useState } from "react";
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

  return (
    <div>
      <h3>Update your routine</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          name="name"
          value={name}
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        ></input>

        <br></br>

        <input
          name="goal"
          value={goal}
          type="text"
          placeholder="goal"
          onChange={(e) => setGoal(e.target.value)}
        ></input>

        <br></br>
        <p>is public?</p>
        <input
          name="isPublic"
          value={isPublic}
          type="checkbox"
          default={false}
          onChange={(e) => setIsPublic(!isPublic)}
        ></input>

        <br></br>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateRoutineForm;
