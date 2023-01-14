import React from "react";
import { useState } from "react";
import { loginUser } from "../api/auth";
import { useNavigate } from "react-router-dom";

const LogIn = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [testPassword, setTestPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <form
        onSubmit={async (event) => {
          if (password === testPassword) {
            try {
              event.preventDefault();
              const token = await loginUser(username, password);
              console.log("Login stuff", username, password, token);
              setToken(token);
              localStorage.setItem("token", token);
              navigate("/Users");
            } catch (error) {
              console.error(error);
            }
          } else {
            alert("You wrong sucka");
            return;
          }
        }}
      >
        <input
          name="username"
          required
          value={username}
          type="text"
          placeholder="username"
          className="input"
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <input
          name="password"
          required
          value={password}
          type="password"
          placeholder="password"
          className="input"
          minLength="8"
          maxLength="12"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        <input
          name="password"
          required
          value={testPassword}
          type="password"
          placeholder="confirmPassword"
          className="input"
          minLength="8"
          maxLength="12"
          onChange={(event) => setTestPassword(event.target.value)}
        ></input>
        <button className="login" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LogIn;
