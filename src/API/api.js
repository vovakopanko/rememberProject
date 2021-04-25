import axios from "axios";

let instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "8256ff37-d3d1-441d-908a-445078d78397",
  },
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
});

export const userAPI = {
  getUser(userId) {
    return instance.get(`profile/${userId}`).then((Response) => Response.data);
  },
  getUsers(currentPage,pageSize){
      return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(Response=>Response.data)
  }

}

export const subscribeAPI = {
 deleteUser(id) {
    return instance.delete(`follow/${id}`).then((Response) => Response.data)
 },
 postUser(id) {
    return instance.post(`follow/${id}`).then((Response) => Response.data)
 }
}
