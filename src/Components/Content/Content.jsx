import React, { useState } from "react";
import s from "./Content.module.css";
import ContentStatusHOOK from "./ContentStatusHOOK";
import userPhoto from "./../../pictures/userPhoto.png";
import FormData from "./FormData";
import Preloader from "../Preloader/Preloader";

const Content = ({
  profile,
  updateStatusThunk,
  status,
  isOwner,
  savePhoto,
  UpdateInformarionAboutUser,
}) => {
  let [editMode, setEditMode] = useState(true);
  let [isFetching, setIsFetching] = useState(false);

  const onSubmit = (formData) => {
    setIsFetching(true);
    UpdateInformarionAboutUser(formData).then(() => {
      setIsFetching(false);
      setEditMode(true);
    });
  };

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
        isOwner={isOwner}
      />
      {isFetching ? (
        <Preloader />
      ) : (
        <div>
          {editMode ? (
            <UserData
              profile={profile}
              isOwner={isOwner}
              goToEditMode={() => {
                setEditMode(false);
              }}
            />
          ) : (
            <FormData
              initialValues={profile}
              profile={profile}
              onSubmit={onSubmit}
            />
          )}
        </div>
      )}
    </div>
  );
};

const UserData = ({ profile, goToEditMode, isOwner }) => {
  return (
    <div>
      <div>
        <b>Full Name: </b>
        {profile.fullName}
      </div>
      <div>
        <b>About Me: </b>
        {profile.aboutMe}
      </div>
      <div>
        <b>A job description: </b>
        {profile.lookingForAJobDescription}
      </div>
      <div>
        <b>Looking for a job: </b>
        {profile.lookingForAJob ? "Search working place" : "Working"}
      </div>
      <div>
        <b>Social network: </b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Social
              key={key}
              socialTitle={key}
              socialValue={profile.contacts[key]}
            />
          );
        })}
      </div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Update user information</button>
        </div>
      )}
    </div>
  );
};

export const Social = ({ socialTitle, socialValue }) => {
  return (
    <div>
      {socialValue != null ? (
        <span>
          {socialTitle}: <span>{socialValue}</span>
        </span>
      ) : (
        " "
      )}
    </div>
  );
};
export default Content;
