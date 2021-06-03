import { instance } from "./instance";

export const securityAPI = {
  getCaptchaForLogin() {
    return instance
      .get(`security/get-captcha-url`)
      .then((Response) => Response.data);
  },
};
