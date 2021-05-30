import React from "react";
import s from "./Friends.module.css";
import Preloader from "../Preloader/Preloader";
import Pagination from "./Pagination";
import Friend from "./Friend";

type userFriendsType = {
  id: number;
  name: null | string;
  status: null | string;
  followed: null | boolean;
  photos: photosType;
};

type photosType = {
  small: string | null;
  large: string | null;
};

type propsType = {
  totalUsersCount:number,
  pageSize:number,
  userFriends:Array<userFriendsType>,
  currentPage:number,
  getCurrentPage:(pages:number)=>void,
  isFetching:boolean,
  isButtonLock: Array<number>,
  deleteUsersThunkCreator:()=>void,
  postUsersThunkCreator:()=>void,
  portionSize:number
}

const Friends:React.FC<propsType> = ({
  totalUsersCount,
  pageSize,
  userFriends,
  currentPage,
  getCurrentPage,
  isFetching,
  isButtonLock,
  deleteUsersThunkCreator,
  postUsersThunkCreator,
  portionSize,
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
        portionSize={portionSize}
      />
    </div>
  );
};

export default Friends;
