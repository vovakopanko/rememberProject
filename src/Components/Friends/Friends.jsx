import React from "react";
import s from "./Friends.module.css";
import Preloader from "../Preloader/Preloader";
import Pagination from "./Pagination";
import Friend from "./Friend";

let Friends = ({
  totalUsersCount,
  pageSize,
  userFriends,
  currentPage,
  getCurrentPage,
  isFetching,
  isButtonLock,
  deleteUsersThunkCreator,
  postUsersThunkCreator,
}) => {
  return (
    <div className={s.friends}>
      {isFetching ? (
        <Preloader />
      ) : (
        <div>
          {userFriends.map((name) => (
            <Friend
              isButtonLock={isButtonLock}
              deleteUsersThunkCreator={deleteUsersThunkCreator}
              postUsersThunkCreator={postUsersThunkCreator}
              user={name}
              key={name.id}
            />
          ))}
        </div>
      )}
      <Pagination
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        getCurrentPage={getCurrentPage}
      />
    </div>
  );
};

export default Friends;
