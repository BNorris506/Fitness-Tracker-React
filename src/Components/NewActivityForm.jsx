import React, { useState } from "react";
import { createActivity, getActivities } from "../api/auth";

const NewActivityForm = ({ token, activities, setActivities }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const oldActivity = await getActivities();
      oldActivity.map((activity) => {
        if (activity.name === name) {
          alert("Activity already exists");
          return;
        }
      });
      if (alert) {
        setName("");
        setDescription("");
        return;
      }
      const newActivity = await createActivity(token, name, description);
      setName("");
      setDescription("");
      setActivities([newActivity, ...activities]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex-child newForm">
      <h4>Make a new activity</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          name="name"
          value={name}
          type="text"
          required
          placeholder="name"
          className="input form"
          onChange={(e) => setName(e.target.value)}
        ></input>

        <br></br>

        <input
          name="description"
          value={description}
          type="text"
          required
          placeholder="description"
          className="input form"
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <br></br>

        <button className="login submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewActivityForm;
