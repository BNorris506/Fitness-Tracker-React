import React, { useState, useEffect } from "react";
import { createRoutine, getRoutinesByUsername } from "../api/auth";

const NewRoutineForm = ({ token, myRoutines, setMyRoutines }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const newRoutine = await createRoutine({
        name,
        goal,
        isPublic,
        token,
      });
      setName("");
      setGoal("");
      setMyRoutines([newRoutine, ...myRoutines]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Make a new routine</h3>
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

export default NewRoutineForm;
