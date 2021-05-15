import React from "react";
import s from "./Content.module.css";
import ContentStatusHOOK from "./ContentStatusHOOK";
import userPhoto from "./../../pictures/userPhoto.png";

const Content = ({
  profile,
  updateStatusThunk,
  status,
  isOwner,
  savePhoto,
}) => {
  const savePhotoOnServer = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  return (
    <div>
      <div className={s.phhotoUser}>
        <img
          src={profile.photos.large != null ? profile.photos.large : userPhoto}
          alt="photoUser"
        />
      </div>
      {isOwner && <input type="file" onChange={savePhotoOnServer} />}
      <ContentStatusHOOK
        getStatus={status}
        updateStatusThunk={updateStatusThunk}
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
