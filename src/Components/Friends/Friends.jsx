import React from "react";
import s from "./Friends.module.css";
import userPhoto from "./../../pictures/userPhoto.png";
import axios from "axios";

class Friends extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        debugger;
        this.props.setUsers(response.data.items);
        this.props.setQuantityUsers(response.data.totalCount);
      });
  }
  getCurrentPage = (pageNumber) => {
    this.props.setPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
    return (
      <div className={s.friends}>
        {this.props.userFriends.map((name) => (
          <div className={s.friends__block} key={name.id}>
            <div>
              NAME: <b>{name.name}</b>
            </div>
            <div>
              PHOTOS:{" "}
              <div>
                <img
                  alt="photoUsers"
                  className={s.friends__photo}
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
        <div className={s.friends__pagination}>
          {pages.map((p) => {
            return (
              <span
                onClick={() => this.getCurrentPage(p)}
                className={
                  this.props.currentPage === p ? s.friends__activPage : " "
                }
              >
                {p}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Friends;
