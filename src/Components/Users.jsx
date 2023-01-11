import React, { useState, useEffect } from "react";
import { getRoutines, fetchMe } from "../api/auth";
import { Link } from "react-router-dom";

const Users = ({ user }) => {
  const [routines, setRoutines] = useState([]);
  // console.log("This is the user:", user);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  useEffect(() => {
    const routinesArr = async () => {
      const data = await getRoutines();
      setRoutines(data);
    };
    routinesArr();
  }, []);
  // console.log("I'm the routines:", routines);

  return (
    <div className="routine_list">
      <h1>Welcome Back {user?.username}</h1>
      <h2>Are you ready to crush it?!?!?!</h2>
      <Link to="/my_routines">My Routines</Link>
      <Link to="/activities">Activities</Link>
      <Link to="/routines">Routines</Link>
      <button onClick={logout}>Log out</button>
    </div>
  );
};

export default Users;
