import React from "react";
import { Field, reduxForm } from "redux-form";
import Posts from "./Posts/Posts";

const WallForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={"textarea"}
          name={"Message"}
          placeholder="Write your message"
        />
      </div>
      <div>
        <button>SEND POST</button>
      </div>
    </form>
  );
};

const WallReduxForm = reduxForm({ form: "wallposts" })(WallForm);

export const Wall = ({ usersPosts, AddPost }) => {
  const onSubmit = (FormData) => {
    return AddPost(FormData.Message);
  };
  return (
    <div>
      <b>Your Wall:</b>
      {usersPosts.map((post) => (
        <Posts
          key={post.id}
          name={post.name}
          age={post.age}
          comment={post.comment}
        />
      ))}
      <WallReduxForm onSubmit={onSubmit} />
    </div>
  );
};
