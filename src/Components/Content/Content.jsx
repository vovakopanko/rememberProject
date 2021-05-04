import React from "react";
import s from "./Content.module.css";
import ContentStatus from "./ContentStatus";

let Content = ({ profile, updateStatusThunk, getStatusThunk, status }) => {
  return (
    <div >
      <div>WELCOME DEAR</div>
      <div>
        <img src={profile.photos.large} alt="photoUser" />
      </div>
      <ContentStatus
        status={status}
        updateStatusThunk={updateStatusThunk}
        getStatusThunk={getStatusThunk}
      />
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
        {profile.lookingForAJob ? "В активном поиске" : "Работаю"}
      </div>
      <div>
        <b>Социальные сети: </b>
      </div>
      <div className={s.content__wall}></div>
    </div>
  );
};

export default Content;
