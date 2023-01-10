import "./app.css";
// import FetchPosts from "./src/Components/FetchPosts";
import React, { useState, useEffect } from "react";
// import { PostsView } from "./src/Components/PostsView";
// import Register from "./Components/Register";
// import { fetchMe } from "../api/auth";
// import { LogIn } from "./src/Components/LoginOut";
// import { NewPostForm } from "./src/Components/NewPost";
// import { UserInfo } from "./Components/UserInfo";
// import { Nav } from "./Components/Nav";
import { Route, Routes } from "react-router-dom";

function App(props) {
  return <div>Hello World</div>;
}

// function App() {
//   const [posts, setPost] = useState([]);
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [userData, setUserData] = useState({});

//   useEffect(() => {
//     FetchPosts(setPost);
//   }, []);

//   useEffect(() => {
//     const getMe = async () => {
//       const data = await fetchMe(token);
//       setUserData(data);
//     };
//     if (token) {
//       getMe();
//     }
//   }, [token]);

//   return (
//     <div className="App">
//       <Nav userData={userData} post={posts}></Nav>
//       <Routes>
//         <Route path="/Login" element={<LogIn setToken={setToken} />}></Route>
//         <Route
//           path="/Register"
//           element={<Register setToken={setToken} />}
//         ></Route>
//         <Route
//           path="/"
//           element={<RoutineActivities posts={posts} token={token} />}
//         ></Route>
//         <Route
//           path="/Routines"
//           element={<UserInfo userData={userData} token={token} />}
//         ></Route>
//         <Route path="/Activities" element={<Activity token={token} />}></Route>
//       </Routes>
//     </div>
//   );
// }
export default App;
