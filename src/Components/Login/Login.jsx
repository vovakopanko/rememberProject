import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { LoginThunk } from "./../../redux/authReducer";
import {
  CreateField,
  required,
  requiredLogin,
} from "../../validators/validator";
import s from "./Login.module.css";
import { Redirect } from "react-router";
import { Input } from "../../FormsControls/FormsControls";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>Login:</div>
      {CreateField("login",Input, [required], "Login","Write your login")}
      <div>
        <div>Password:</div>
        {CreateField("password",Input, [required], "Password","Write your password")}
      </div>
      <div>
        {CreateField("checkbox",Input,[required],"CheckRememberMe",{})}
        Remember me?
      </div>

      {props.captchaUrl && <img src={props.captchaUrl} alt={"captchaUrl"} />}
      
      {props.captchaUrl &&
        CreateField(
          "captcha",
          Input,
          [requiredLogin],
          "Symbols from image",
          {}
        )}

      {props.error && <div className={s.errorIcon}>{props.error}</div>}
      <button>Enter</button>
      <button>Registration</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    return props.LoginThunk(
      formData.Login,
      formData.Password,
      formData.CheckRememberMe,
      formData.captchaUrl
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
