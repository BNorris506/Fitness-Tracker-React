import "./app.css";
import React, { useState, useEffect } from "react";
import Register from "./Components/Register";
import Welcome from "./Components/Welcome";
import Routines from "./Components/Routines";
import MyRoutines from "./Components/MyRoutines";
import Activities from "./Components/Activities";
import ErrorComponent from "./Components/ErrorComponent";
import LogIn from "./Components/LogIn";
import { fetchMe } from "./api/auth";
import { Route, Routes } from "react-router-dom";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");

  useEffect(() => {
    const getMe = async () => {
      const data = await fetchMe(token);
      setUser(data);
    };
    if (token) {
      getMe();
    }
  }, [token]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/login" element={<LogIn setToken={setToken} />}></Route>
        <Route
          path="/register"
          element={<Register setToken={setToken} />}
        ></Route>
        <Route path="/routines" element={<Routines />}></Route>
        <Route
          path="/my_routines"
          element={<MyRoutines setToken={setToken} />}
        ></Route>
        <Route path="/activities" element={<Activities />}></Route>
        <Route path="*" element={<ErrorComponent />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
