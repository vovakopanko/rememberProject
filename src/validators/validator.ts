export type FieldValidatorsType = (value:string) => string | undefined

export const required:FieldValidatorsType = (value) => {
  if (value) return undefined;
  return "String must have symbols";
};

export const requiredLogin:FieldValidatorsType = (value) => {
  if (value) return undefined;
  return "You don't write login or password";
};

export const maxLengthCreator = (size:number):FieldValidatorsType => (value) => {
  if (value.length > size) return `Max length is ${size} sybols`;
  return undefined;
};

