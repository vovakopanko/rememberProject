import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {LoginThunk} from "./../../redux/authReducer"
import { requiredLogin } from "../../validators/validator";
import { Input } from "../FormsControls/FormsControls";
import s from "./Login.module.css";
import { Redirect } from "react-router";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>Login:</div>
        <Field component={Input} validate={requiredLogin} name={'Login'} placeholder={'Write your login'}/>
      <div>
        <div>Password:</div>
        <Field placeholder={'Write your password'} component={Input} validate={requiredLogin} type={'password'} name={'Password'}/>
      </div>
      <div>
        <Field component={Input} type={"checkbox"} name={'CheckRememberMe'}/>
        Remember me?
      </div>
      {props.error && <div className={s.errorIcon}>
        {props.error}
      </div>}
      <button>Enter</button>
      <button>Registration</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData)=>{return props.LoginThunk(formData.Login,formData.Password,formData.CheckRememberMe)}
  
if (props.isAuth){
  return <Redirect to="/profile"/>
}

  return (
    <div className={s.app__header}>
      <h1>LOGIN:</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};

let setStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(setStateToProps, {LoginThunk} )(Login);
