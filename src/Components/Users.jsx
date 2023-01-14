import React, { useState, useEffect } from "react";
import { getRoutines } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Users = ({ user }) => {
  const [routines, setRoutines] = useState([]);
  const navigate = useNavigate();
  // console.log("This is the user:", user);

  const logout = () => {
    localStorage.clear();
    navigate("/");
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
      <h1>Welcome Back, {user?.username}</h1>
      <h2>Are you ready to crush it?!?!?!</h2>
      <Link to="/my_routines">My Routines</Link>
      <Link to="/activities">Activities</Link>
      <Link to="/routines">Routines</Link>
      <button onClick={logout}>Log out</button>
    </div>
  );
};

export default Users;
