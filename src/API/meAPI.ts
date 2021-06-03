import { instance } from "./instance";

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
  CaptchaIsRequired = 10,
}

type MeResponseType = {
  resultCode: ResultCodeEnum;
  messages: Array<string>;
  data: {
    id: number;
    email: string;
    login: string;
  };
};

export const meAPI = {
  me() {
    return instance
      .get<MeResponseType>("auth/me")
      .then((Response) => Response.data);
  },
  logIn(
    email: string,
    password: number,
    rememberMe: boolean,
    captcha: string
  ) {
    debugger;
    return instance
      .post("auth/login", { email, password, rememberMe, captcha })
      .then((Response) => Response.data);
  },
  logOut() {
    return instance.delete("auth/login").then((Response) => Response.data);
  },
};
