import React from "react";
import s from "./Content.module.css";
import sahara from "./../pictures/sahara.jpg";
import Posts from "./Posts/Posts";

const Content = ({ usersPosts, userNewPost, addNewPost, updateNewPost }) => {
  debugger;
  let postsElementData = usersPosts.map((post) => (
    <Posts
      key={post.id}
      name={post.name}
      age={post.age}
      comment={post.comment}
    />
  ));

  let newPostText = React.createRef();
  let addPost = () => {
    addNewPost();
  };

  let onChangePost = () => {
    let text = newPostText.current.value;
    updateNewPost(text);
  };

  return (
    <div className={s.app__header}>
      <div>WELCOME DEAR</div>
      <img src={sahara} alt="sahara" />
      {postsElementData}
      <div>
        <textarea
          ref={newPostText}
          value={userNewPost}
          onChange={onChangePost}
        ></textarea>
      </div>
      <div>
        <button onClick={addPost}>SEND POST</button>
      </div>
    </div>
  );
};

export default Content;
