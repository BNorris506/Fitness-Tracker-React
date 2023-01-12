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
import { Route, Routes, useNavigate } from "react-router-dom";
import Users from "./Components/Users";
import NewRoutineForm from "./Components/NewRoutine";
import GuestRoutines from "./Components/Guest/GuestRoutines";
import GuestActivities from "./Components/Guest/GuestActivities";
import GuestHome from "./Components/Guest/GuestHome";
import CreateActivity from "./Components/CreateActivity";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getMe = async () => {
      const data = await fetchMe(token);
      setUser(data);
    };
    if (token) {
      getMe();
    }
  }, [token]);

  const isLoggedIn = () => {
    token ? navigate("/Users") : navigate("/");
  };
  useEffect(() => {
    isLoggedIn();
  }, [token]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome setToken={setToken} />}></Route>
        <Route path="/login" element={<LogIn setToken={setToken} />}></Route>
        <Route
          path="/register"
          element={<Register setToken={setToken} />}
        ></Route>
        <Route path="/routines" element={<Routines token={token} />}></Route>
        <Route
          path="/my_routines"
          element={<MyRoutines user={user} token={token} />}
        ></Route>
        <Route path="/activities" element={<Activities />}></Route>
        <Route path="/Users" element={<Users user={user} />}></Route>
        <Route
          path="/newRoutine"
          element={<NewRoutineForm token={token} />}
        ></Route>
        <Route path="/create_activity" element={<CreateActivity />}></Route>
        <Route path="/guest" element={<GuestHome />}></Route>
        <Route path="/guestRoutines" element={<GuestRoutines />}></Route>
        <Route path="/guestActivities" element={<GuestActivities />}></Route>
        <Route path="*" element={<ErrorComponent />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
