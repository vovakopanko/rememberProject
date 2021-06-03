import { instance } from "./instance";

export const subscribeAPI = {
    deleteUser(id:number) {
      return instance.delete(`follow/${id}`).then((Response) => Response.data);
    },
    postUser(id:number) {
      return instance.post(`follow/${id}`).then((Response) => Response.data);
    },
    getUser(id:number) {
      return instance.post(`follow/${id}`).then((Response) => Response.data);
    },
  };