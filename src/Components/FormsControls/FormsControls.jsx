import React from "react";
import style from "./FormsControls.module.css";


export const Textarea = ({input,meta,...props}) => {
    const hasError = meta.touched && meta.error;
  return (
    <div className={style.formControl + " " + (hasError ? style.error : " ")}>
      <textarea {...input} {...props}/>
      <div>
      {hasError && <span>{meta.error}</span>}
      </div>
    </div>
  );
};

export const Input = ({input,meta,...props}) => {
    const hasError = meta.touched && meta.error
  return (
    <div className={style.formControl + " " + (hasError ? style.error : " ")}>
      <input {...input} {...props}/>
      <div>
      {hasError && <span>{meta.error}</span>}
      </div>
    </div>
  );
};
