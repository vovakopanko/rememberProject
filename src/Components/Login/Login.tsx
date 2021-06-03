import React from "react";
import { connect } from "react-redux";
import { InjectedFormProps, reduxForm } from "redux-form";
import { LoginThunk } from "../../redux/authReducer";
import { required } from "../../validators/validator";
import s from "./Login.module.css";
import { Redirect } from "react-router";
import { CreateField, Input } from "../../FormsControls/FormsControls";
import { AppStateType } from "../../redux/store";

type LoginFormOwnType = {
  captchaUrl: string | null;
};

const LoginForm: React.FC<
  InjectedFormProps<LoginFormValueType, LoginFormOwnType> & LoginFormOwnType
> = ({ handleSubmit, captchaUrl, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>Login:</div>
      {CreateField({}, Input, [required], "email", "Write your login")}
      <div>
        <div>Password:</div>
        {CreateField(
          "password",
          Input,
          [required],
          "password",
          "Write your password"
        )}
      </div>
      <div>
        {CreateField("checkbox", Input, [], "rememberMe", undefined)}
        Remember me?
      </div>

      {captchaUrl && <img src={captchaUrl} alt={"captchaUrl"} />}

      {captchaUrl &&
        CreateField(
          {},
          Input,
          [required],
          "captcha",
          "Write letters from the picture"
        )}

      {error && <div className={s.errorIcon}>{error}</div>}
      <button>Enter</button>
      <button>Registration</button>
    </form>
  );
};

const LoginReduxForm = reduxForm<LoginFormValueType,LoginFormOwnType>({ form: "login" })(LoginForm);

type LoginFormValueType = {
  email: string;
  password: number;
  rememberMe: boolean;
  captcha: string;
};

const Login: React.FC<mapStateToPropsType & mapDispatchToProps> = (props) => {
  const onSubmit = (formData: LoginFormValueType) => {
    props.LoginThunk(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
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

type mapStateToPropsType = {
  isAuth: boolean;
  captchaUrl: string | null;
};

type mapDispatchToProps = {
  LoginThunk: (
    email: string,
    password: number,
    rememberMe: boolean,
    captcha: string
  ) => void;
};

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
  };
};

export default connect(mapStateToProps, { LoginThunk })(Login);
