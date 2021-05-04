import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./Login.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>Login:</div>
        <Field component={'input'} name={'Login'} placeholder={'Write your login'}/>
      <div>
        <div>Password:</div>
        <Field placeholder={'Write your password'} component={'input'} type={'password'} name={'Password'}/>
      </div>
      <div>
        <Field component={'input'} type={"checkbox"} name={'CheckRememberMe'}/>
        Remember me?
      </div>
      <button>Enter</button>
      <button>Registration</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {
  const onSubmit = (formData)=>{return console.log(formData)}
  return (
    <div className={s.app__header}>
      <h1>LOGIN:</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  );
};
export default Login;
