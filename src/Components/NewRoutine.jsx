import React, { useState } from "react";
import { createRoutine } from "../api/auth";

const NewRoutineForm = ({ token }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  return (
    <div>
      <h1>New Routine</h1>
      <form
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            const newRoutine = await createRoutine({
              name,
              goal,
              isPublic,
              token,
            });
            window.location.href = "/my_routines";
          } catch (error) {
            console.error(error);
          }
        }}
      >
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
        <p>is public? (Warning: ONLY public comments will be visible)</p>
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
