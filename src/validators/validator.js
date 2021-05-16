import { Field } from "redux-form";

export const required = (value) => {
  if (value) return undefined;
  return "String must have symbols";
};

export const requiredLogin = (value) => {
  if (value) return undefined;
  return "You don't write login or password";
};

export const maxLengthCreator = (size) => (value) => {
  if (value.length > size) return `Max length is ${size} sybols`;
  return undefined;
};

export const CreateField = (type, component, validate, name, placeholder) => {
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
