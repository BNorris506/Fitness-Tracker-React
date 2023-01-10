import React, { useState } from "react";
import { DeletePost } from "./DeletePost";

export const UserInfo = (props) => {
  const [routines, setRoutines] = useState([]);
  const authorId = props.token;
  return (
    <div>
      <div>
        {props.userData && props.userData.posts ? (
          props.userData.posts.map((myPost) => {
            const postId = myPost._id;
            return (
              <div className="myPost" key={myPost._id}>
                <p> {myPost.title}</p>
                <p> {myPost.description}</p>
                <p>Price: {myPost.price}</p>
                <p>Location: {myPost.location}</p>
                <button
                  onClick={async () => {
                    const postDelete = await DeletePost(authorId, postId);
                  }}
                >
                  Delete Post
                </button>
              </div>
            );
          })
        ) : (
          <h2>No posts brother</h2>
        )}
      </div>
      <div>
        {props.userData && props.userData.messages ? (
          props.userData.messages.map((myMessage) => {
            return (
              <div className="myMessage" key={myMessage._id}>
                <p>{myMessage.post.title}</p>
                <p>{myMessage.content}</p>
                <p>From: {myMessage.fromUser.username}</p>
              </div>
            );
          })
        ) : (
          <h2>No messages brother</h2>
        )}
      </div>
    </div>
  );
};
