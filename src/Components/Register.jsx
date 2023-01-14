import React, { useState } from "react";
import { registerUser } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Register = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <h1>We Can't Wait To See You</h1>
      <h2>Please fill out the form below</h2>
      <form
        onSubmit={async (e) => {
          if (password.length > 12) {
            alert("Too long sucka make it 12 or less");
            return;
          }
          try {
            e.preventDefault();
            console.log("The stuff:", username, password);
            const token = await registerUser(username, password);
            setToken(token);
            localStorage.setItem("token", token);
            console.log("This is token", token);
            navigate("/Users");
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <input
          name="username"
          value={username}
          type="text"
          placeholder="username"
          className="input"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          name="password"
          value={password}
          type="password"
          placeholder="password"
          className="input"
          minLength="8"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Register</button>
      </form>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/guest">Continue as guest</Link>
      </div>
      <div className="listContainer">
        <h3>Benefits of Membership</h3>
        <ol>
          <li>Keep track of your progress</li>
          <li>Make your own activities</li>
          <li>Keep yourself accountable to your goals</li>
        </ol>
      </div>
    </div>
  );
};

export default Register;
