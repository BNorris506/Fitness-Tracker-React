import "./App.css";
import FetchPosts from "./Components/FetchPosts";
import React, { useState, useEffect } from "react";
import { PostsView } from "./Components/PostsView";
import Register from "./Components/Register";
import { fetchMe } from "./api/auth";
import { LogIn } from "./Components/LoginOut";
import { NewPostForm } from "./Components/NewPost";
import { UserInfo } from "./components/UserInfo";
import { Nav } from "./components/Nav";
import { Route, Routes } from "react-router-dom";

function App() {
  const [posts, setPost] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [userData, setUserData] = useState({});

  useEffect(() => {
    FetchPosts(setPost);
  }, []);

  useEffect(() => {
    const getMe = async () => {
      const data = await fetchMe(token);
      setUserData(data);
    };
    if (token) {
      getMe();
    }
  }, [token]);

  return (
    <div className="App">
      <Nav userData={userData} post={posts}></Nav>
      <Routes>
        <Route path="/Login" element={<LogIn setToken={setToken} />}></Route>
        <Route
          path="/Register"
          element={<Register setToken={setToken} />}
        ></Route>
        <Route
          path="/"
          element={<PostsView posts={posts} token={token} />}
        ></Route>
        <Route
          path="/UserInfo"
          element={<UserInfo userData={userData} token={token} />}
        ></Route>
        <Route
          path="/createpost"
          element={<NewPostForm token={token} />}
        ></Route>
      </Routes>
    </div>
  );
}
export default App;
