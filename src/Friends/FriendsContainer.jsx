import React from "react";
import s from "./Friends.module.css";
import Friends from "./Friends.jsx";

const FriendsContainer = ({userFriends}) => {

  let FriendsData = (props) => {
    return <div>{props.name}</div>;
  };

  let listFriends = userFriends.map((name) => <FriendsData name={name.name} />);

  return (
    <div className={s.app__header}>
      <Friends listFriends={listFriends}/>
    </div>
  );
};

export default FriendsContainer;
