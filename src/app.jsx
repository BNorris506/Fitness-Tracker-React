import "./app.css";
import React, { useState, useEffect } from "react";
import Register from "./Components/Register";
import Welcome from "./Components/Welcome";
import Routines from "./Components/Routines";
import MyRoutines from "./Components/MyRoutines";
import Activities from "./Components/Activities";
import ErrorComponent from "./Components/ErrorComponent";
import LogIn from "./Components/LogIn";
import { fetchMe, getActivities } from "./api/auth";
import { Route, Routes, useNavigate } from "react-router-dom";
import Users from "./Components/Users";
import NewRoutineForm from "./Components/NewRoutine";
import GuestRoutines from "./Components/Guest/GuestRoutines";
import GuestActivities from "./Components/Guest/GuestActivities";
import GuestHome from "./Components/Guest/GuestHome";
import CreateActivity from "./Components/NewActivityForm";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [activities, setActivities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getMe = async () => {
      const token = localStorage.getItem("token");
      console.log("This is token", token);
      const data = await fetchMe(token);
      console.log("This is data", data);
      setUser(data);
      console.log("This is user line 30", user);
    };
    const activitiesArr = async () => {
      const data = await getActivities();
      setActivities(data);
    };
    activitiesArr();
    if (token) {
      getMe();
    }
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
          element={
            <MyRoutines user={user} token={token} activities={activities} />
          }
        ></Route>
        <Route
          path="/activities"
          element={
            <Activities
              token={token}
              activities={activities}
              setActivities={setActivities}
            />
          }
        ></Route>
        <Route path="/Users" element={<Users user={user} />}></Route>
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
