import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../validators/validator";
import { Textarea } from "../FormsControls/FormsControls";
import Posts from "./Posts/Posts";

const maxLength45 = maxLengthCreator(45)
const WallForm = ({handleSubmit}) => {
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name={"Message"}
          validate={[required,maxLength45]}
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
