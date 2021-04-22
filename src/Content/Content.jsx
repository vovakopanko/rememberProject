import React from "react";
import s from "./Content.module.css";
import sahara from "./../pictures/sahara.jpg";
<<<<<<< HEAD
import Posts from "./Posts/Posts";

const Content = ({ usersPosts, userNewPost, addPost, onChangePost }) => {
=======
import Posts from "./Posts/Posts"


const Content = ({
  usersPosts,
  userNewPost,
  addPost,
  onChangePost,
}) => {

>>>>>>> refs/remotes/origin/master
  let postsElementData = usersPosts.map((post) => (
    <Posts
      key={post.id}
      name={post.name}
      age={post.age}
      comment={post.comment}
    />
  ));
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/master
  return (
    <div className={s.app__header}>
      <div>WELCOME DEAR</div>
      <img src={sahara} alt="sahara" />
      {postsElementData}
      <div>
<<<<<<< HEAD
        <textarea value={userNewPost} onChange={onChangePost}></textarea>
=======
        <textarea
          value={userNewPost}
          onChange={onChangePost}
        ></textarea>
>>>>>>> refs/remotes/origin/master
      </div>
      <div>
        <button onClick={addPost}>SEND POST</button>
      </div>
    </div>
  );
};

export default Content;
