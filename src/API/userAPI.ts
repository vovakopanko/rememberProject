import { profileAPI } from "./profileAPI";
import { instance } from "./instance";

export const userAPI = {
    getUser(userId:number) {
      return profileAPI.getUser(userId);
    },
    getUsers(currentPage:number, pageSize:number) {
      return instance
        .get(`users?page=${currentPage}&count=${pageSize}`)
        .then((Response) => Response.data);
    },
    getAllFriends() {
      return instance
        .get(`users?friend=${true}`)
        .then((Response) => Response.data);
    },
  };