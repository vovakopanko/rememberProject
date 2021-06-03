import React from "react";
import { Field, WrappedFieldProps } from "redux-form";
import style from "./FormsControls.module.css";
import { FieldValidatorsType } from "./../validators/validator"

type InputType = {
  input: any
  meta: {
    touched:boolean
    error:string
  }
}

export const Textarea:React.FC<WrappedFieldProps> = ({input,meta,...props}) => {
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

export const Input:React.FC<InputType> = ({input,meta,...props}) => {
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

export const CreateField = (type:any, component:any, validate:Array<FieldValidatorsType>, name:string, placeholder:string | undefined) => {
  return (
    <Field
      type={type}
      component={component}
      validate={validate}
      name={name}
      placeholder={placeholder}
    />
  );
};