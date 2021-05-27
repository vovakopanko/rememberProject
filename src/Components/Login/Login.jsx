import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { LoginThunk } from "./../../redux/authReducer";
import {
  CreateField,
  required,
} from "../../validators/validator";
import s from "./Login.module.css";
import { Redirect } from "react-router";
import { Input } from "../../FormsControls/FormsControls";

const LoginForm = ({handleSubmit,captchaUrl,error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>Login:</div>
      {CreateField({},Input, [required], "Login","Write your login")}
      <div>
        <div>Password:</div>
        {CreateField("password",Input, [required], "Password","Write your password")}
      </div>
      <div>
        {CreateField("checkbox",Input,[],"CheckRememberMe",{})}
        Remember me?
      </div>

      {captchaUrl && <img src={captchaUrl} alt={"captchaUrl"} />}
      
      {captchaUrl &&
        CreateField(
          {},
          Input,
          [required],
          "Captcha",
          "Write letters from the picture"
        )}

      {error && <div className={s.errorIcon}>{error}</div>}
      <button>Enter</button>
      <button>Registration</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.LoginThunk(
      formData.Login,
      formData.Password,
      formData.CheckRememberMe,
      formData.Captcha
    );
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className={s.app__header}>
      <h1>LOGIN:</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

let setStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
  };
};

export default connect(setStateToProps, { LoginThunk })(Login);
