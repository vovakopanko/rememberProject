import React from "react";
import s from "./Content.module.css";
import sahara from "./../../pictures/sahara.jpg";
import Posts from "./Posts/Posts";

class Content extends React.Component {
  render() {
    return (
      <div className={s.app__header}>
        <div>WELCOME DEAR</div>
        <img src={sahara} alt="sahara" />
        {this.props.usersPosts.map((post) => (
          <Posts
            key={post.id}
            name={post.name}
            age={post.age}
            comment={post.comment}
          />
        ))}
        <div>
          <textarea
            value={this.props.userNewPost}
            onChange={this.props.onChangePost}
          />
        </div>
        <div>
          <button onClick={this.props.addPost}>SEND POST</button>
        </div>
      </div>
    );
  }
}

export default Content;
