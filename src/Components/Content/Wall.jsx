import React from "react";
import Posts from "./Posts/Posts";

export const Wall = ({ AddPost, UpdateNewPost, userNewPost, usersPosts }) => {
  return (
    <div>
      <b>Your Wall:</b>
      {usersPosts.map((post) => (
        <Posts
          key={post.id}
          name={post.name}
          age={post.age}
          comment={post.comment}
        />
      ))}
      <div>
        <textarea value={userNewPost} onChange={UpdateNewPost} />
      </div>
      <div>
        <button onClick={AddPost}>SEND POST</button>
      </div>
    </div>
  );
};
