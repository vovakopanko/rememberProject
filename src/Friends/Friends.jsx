import React from "react";
import s from "./Friends.module.css";
import userPhoto from "./../pictures/userPhoto.png";
import axios from "axios";

const Friends = ({ userFriends, follow, unfollow, setUsers }) => {
  // let getUsers = () =>{
  if (userFriends.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users/")
      .then((response) => {
        debugger;
        setUsers(response.data.items);
      });
  }
  // }

  let FriendsData = (props) => {
    return (
      <div className={s.userBlock}>
        <div>
          NAME: <b>{props.name}</b>
        </div>
        <div>
          PHOTOS:{" "}
          <div>
            <img
              alt="photoUsers"
              className={s.photoUsers}
              src={props.photos != null ? props.photos : userPhoto}
            />
          </div>
        </div>
        <div>
          STATUS: {props.status != null ? props.status : "don't status"}
        </div>
        <div>
          {props.followed ? (
            <button onClick={() => unfollow(props.id)}>UNFOLLOW</button>
          ) : (
            <button onClick={() => follow(props.id)}>FOLLOW</button>
          )}
        </div>
      </div>
    );
  };
  let listFriends = userFriends.map((name) => (
    <FriendsData
      id={name.id}
      key={name.id}
      name={name.name}
      status={name.status}
      photos={name.photos.small}
      followed={name.followed}
    />
  ));
  return (
    <div className={s.app__header}>
      <div>FRIENDS ONLINE:</div>
      {/* <div>
        <button onClick={getUsers}>GET USERS</button>
      </div> */}
      <div>{listFriends}</div>
    </div>
  );
};

export default Friends;
