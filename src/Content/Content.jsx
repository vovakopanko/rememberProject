import React from "react";
import s from "./Content.module.css";
import sahara from "./../pictures/sahara.jpg";
import Posts from "./Posts/Posts";

const Content = ({ usersPosts, userNewPost, addPost, onChangePost }) => {
  let postsElementData = usersPosts.map((post) => (
    <Posts
      key={post.id}
      name={post.name}
      age={post.age}
      comment={post.comment}
    />
  ));
  return (
    <div className={s.app__header}>
      <div>WELCOME DEAR</div>
      <img src={sahara} alt="sahara" />
      {postsElementData}
      <div>
        <textarea value={userNewPost} onChange={onChangePost}></textarea>
      </div>
      <div>
        <button onClick={addPost}>SEND POST</button>
      </div>
    </div>
  );
};

export default Content;
