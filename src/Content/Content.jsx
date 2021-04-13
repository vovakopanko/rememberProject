import React from "react";
import s from "./Content.module.css";
import sahara from "./../pictures/sahara.jpg";
import Posts from "./Posts/Posts";

const Content = ({ postData }) => {
  let postsElementData = postData.map((post) => (
    <Posts name={post.name} age={post.age} comment={post.comment} />
  ));

  let newTextPost = React.createRef();
  let addNewPost = () => {
    let text = newTextPost.current.value;
    alert(text);
  };

  return (
    <div className={s.app__header}>
      <div>WELCOME DEAR</div>
      <img src={sahara} alt="sahara" />
      <div>
        <Posts />
      </div>
      {postsElementData}
      <div>
        <textarea placeholder="Write your message" ref={newTextPost}></textarea>
      </div>
      <div>
        <button onClick={addNewPost}>Click Me</button>
      </div>
    </div>
  );
};

export default Content;
