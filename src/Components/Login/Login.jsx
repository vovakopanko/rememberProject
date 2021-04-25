import React from "react";
import s from "./Login.module.css";

const Login = () => {
  return (
    <div className={s.app__header}>
      LOGIN:
      <div>
        <div>Login:</div>
        <textarea placeholder="Write your login" />
      </div>
      <div>
        <div>Password:</div>
        <textarea placeholder="Write your password"/>
      </div>
      <button>Enter</button>
      <button>Registration</button>
    </div>
  );
};

export default Login;
