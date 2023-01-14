import React, { useState } from "react";
import { createRoutine } from "../api/auth";

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
    <div className="flex-child newForm">
      <h4>Make a new routine</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          name="name"
          value={name}
          type="text"
          placeholder="name: "
          required
          className="input form"
          onChange={(e) => setName(e.target.value)}
        ></input>

        <br></br>

        <input
          name="goal"
          value={goal}
          type="text"
          placeholder="goal: "
          className="input form"
          required
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

export default NewRoutineForm;
