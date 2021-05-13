import React from "react";
import s from "./Friends.module.css";
import userPhoto from "./../../pictures/userPhoto.png";
import { NavLink } from "react-router-dom";

let Friend = ({
  isButtonLock,
  deleteUsersThunkCreator,
  postUsersThunkCreator,
  user,
}) => {
  return (
    <div className={s.friends__block}>
      <div>
        NAME: <b>{user.name}</b>
      </div>
      <div>
        PHOTOS:{" "}
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              alt="photoUsers"
              className={s.friends__photo}
              src={user.photos.small != null ? user.photos.small : userPhoto}
            />
          </NavLink>
        </div>
      </div>
      <div>STATUS: {user.status != null ? user.status : "don't status"}</div>
      <div>
        {user.followed ? (
          <button
            disabled={isButtonLock.some((d) => d === user.id)}
            onClick={() => {
              deleteUsersThunkCreator(user.id);
            }}
          >
            UNFOLLOW
          </button>
        ) : (
          <button
            disabled={isButtonLock.some((d) => d === user.id)}
            onClick={() => {
              postUsersThunkCreator(user.id);
            }}
          >
            FOLLOW
          </button>
        )}
      </div>
    </div>
  );
};

export default Friend;
