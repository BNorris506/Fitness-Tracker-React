import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../api/auth";
import LogIn from "./LogIn";

const Welcome = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    // return the login screen with a register component/redirect for new user registration if clicked
    <div>
      {/* <form
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            // use loginUser to go to API and pull token if you are already registered user
            const token = await loginUser(username, password);
            setToken(token);
            console.log("This is the token:", token);
            localStorage.setItem("token", token);
            // const redirHome = () => {
            //   window.location.href = "/Users";
            // };
            // redirHome();
          } catch (error) {
            console.error(error);
          }
        }}
      > */}
      <h1>Welcome</h1>
      <h2> to Fitness Tracker</h2>
      <LogIn setToken={setToken} />
      {/* <input
          type="text"
          value={username}
          placeholder="Username"
          required
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <input
          type="password"
          value={password}
          placeholder="Password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button type="submit">Log In</button>
      </form> */}
      <div className="links">
        <Link to="/register">
          New users, click here to setup your new account!
        </Link>
        <Link to="/guest">Continue as guest</Link>
      </div>
    </div>
  );
};

export default Welcome;
