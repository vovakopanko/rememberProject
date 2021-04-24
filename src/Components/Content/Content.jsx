import React from "react";
import s from "./Content.module.css";
import Posts from "./Posts/Posts";
import Preloader from "./../Preloader/Preloader";

let Content = ({
  AddPost,
  UpdateNewPost,
  userNewPost,
  usersPosts,
  profile,
}) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div className={s.app__header}>
      <div>WELCOME DEAR</div>
      <div>
        <img src={profile.photos.large} alt="photoUser" />
      </div>
      <div>
        <b>Полное имя: </b>
        {profile.fullName}
      </div>
      <div>
        <b>Обо мне: </b>
        {profile.aboutMe}
      </div>
      <div>
        <b>Описание работы мечты: </b>
        {profile.lookingForAJobDescription}
      </div>
      <div>
        <b>В поисках работы: </b>
        {profile.lookingForAJob?"В активном поиске":"Работаю"}
      </div>
      <div>
        <b>Социальные сети: </b>
        
      </div>
      <div className={s.content__wall}>
        <b>Your Wall:</b>
        {usersPosts.map((post) => (
          <Posts
            key={post.id}
            name={post.name}
            age={post.age}
            comment={post.comment}
          />
        ))}
      </div>

      <div>
        <textarea value={userNewPost} onChange={UpdateNewPost} />
      </div>
      <div>
        <button onClick={AddPost}>SEND POST</button>
      </div>
    </div>
  );
};

export default Content;
