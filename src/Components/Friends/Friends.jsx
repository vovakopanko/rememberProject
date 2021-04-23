import React from "react";
import s from "./Friends.module.css";
import userPhoto from "./../../pictures/userPhoto.png";
import axios from "axios";

class Friends extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users/")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }
  render() {
    return (
      <div>
        {this.props.userFriends.map((name) => (
          <div className={s.userBlock} key={name.id}>
            <div>
              NAME: <b>{name.name}</b>
            </div>
            <div>
              PHOTOS:{" "}
              <div>
                <img
                  alt="photoUsers"
                  className={s.photoUsers}
                  src={
                    name.photos.small != null ? name.photos.small : userPhoto
                  }
                />
              </div>
            </div>
            <div>
              STATUS: {name.status != null ? name.status : "don't status"}
            </div>
            <div>
              {name.followed ? (
                <button onClick={() => this.props.unfollow(name.id)}>
                  UNFOLLOW
                </button>
              ) : (
                <button onClick={() => this.props.follow(name.id)}>
                  FOLLOW
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Friends;
