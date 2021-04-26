import React from "react";
import s from "./Friends.module.css";
import userPhoto from "./../../pictures/userPhoto.png";
import Preloader from "../Preloader/Preloader";
import { NavLink } from "react-router-dom";
import { subscribeAPI, userAPI } from "../../API/api";

let Friends = ({
  unfollow,
  follow,
  totalUsersCount,
  pageSize,
  userFriends,
  currentPage,
  getCurrentPage,
  isFetching,
  isButtonLock,
  togleIsBlockButton,
}) => {
  let pageCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return (
    <div className={s.friends}>
      {isFetching ? (
        <Preloader />
      ) : (
        <div>
          {userFriends.map((name) => (
            <div className={s.friends__block} key={name.id}>
              <div>
                NAME: <b>{name.name}</b>
              </div>
              <div>
                PHOTOS:{" "}
                <div>
                  <NavLink to={"/profile/" + name.id}>
                    <img
                      alt="photoUsers"
                      className={s.friends__photo}
                      src={
                        name.photos.small != null
                          ? name.photos.small
                          : userPhoto
                      }
                    />
                  </NavLink>
                </div>
              </div>
              <div>
                STATUS: {name.status != null ? name.status : "don't status"}
              </div>
              <div>
                {name.followed ? (
                  <button
                    disabled={isButtonLock.some((d) => d === name.id)}
                    onClick={() => {
                      togleIsBlockButton(true, name.id);
                      subscribeAPI.deleteUser(name.id).then((data) => {
                        togleIsBlockButton(false, name.id);
                        if (data.resultCode === 0) {
                          unfollow(name.id);
                        }
                      });
                    }}
                  >
                    UNFOLLOW
                  </button>
                ) : (
                  <button
                    disabled={isButtonLock.some((d) => d === name.id)}
                    onClick={() => {
                      togleIsBlockButton(true, name.id);
                      subscribeAPI.postUser(name.id).then((data) => {
                        togleIsBlockButton(false, name.id);
                        if (data.resultCode === 0) {
                          follow(name.id);
                        }
                      });
                    }}
                  >
                    FOLLOW
                  </button>
                )}
              </div>
            </div>
          ))}
          <div className={s.friends__pagination}>
            {pages.map((p) => {
              return (
                <span
                  onClick={() => getCurrentPage(p)}
                  className={currentPage === p ? s.friends__activPage : " "}
                >
                  {p}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Friends;
