import React from "react";
import { reduxForm } from "redux-form";
import { Input, Textarea,CreateField } from "../../FormsControls/FormsControls";
import {Social} from "./Content"


const FormData = ({profile,handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
    <div>
      <b>Full Name: </b>
      {CreateField("text", Textarea, [], "fullName", "Full name")}
    </div>
    <div>
      <b>About Me: </b>
      {CreateField("text", Textarea, [], "aboutMe", "about Me")}
    </div>
    <div>
      <b>A job description: </b>
      {CreateField(
            "text",
            Textarea,
            [],
            "lookingForAJobDescription",
            "Your Skills"
          )}
    </div>
    <div>
      <b>Looking for a job: </b>
      {CreateField(
            "checkbox",
            Input,
            [],
            "lookingForAJob",
            "Looking for a job"
          )}
    </div>
    <div>
      <b>Social network: </b>
      {Object.keys(profile.contacts).map((social) => {
        return (
          <Social
            key={social}
            socialTitle={social}
            socialValue={CreateField({}, Input, [], "contacts." + social, social)}
          />
        );
      })}
    </div>
    <button>Save Information</button>
  </form>
  )
}

const ReduxFormData = reduxForm({ form: "editprofile" })(FormData);

export default ReduxFormData;
