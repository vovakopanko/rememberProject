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
    return profileAPI.getUser(userId);
  },
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((Response) => Response.data);
  },
};

export const profileAPI = {
  getUser(userId) {
    return instance.get(`profile/${userId}`).then((Response) => Response.data);
  },
  getStatus(userId) {
    return instance
      .get(`/profile/status/${userId}`)
      .then((Response) => Response.data);
  },
  updateStatus(body) {
    return instance
      .put(`/profile/status`, { status: body })
      .then((Response) => Response.data);
  },
  setUserPhoto(photo){
    const formData = new FormData();
    formData.append("image", photo)
    return instance
    .put('/profile/photo',formData, {
      headers: {
        'Content-Type' : 'multipart/form-data'
      }
    })
    .then((Response)=>Response.data);
  }
};

export const meAPI = {
  me() {
    return instance.get("auth/me").then((Response) => Response.data);
  },
  logIn(email, password, rememberMe = false) {
    return instance
      .post("auth/login", { email, password, rememberMe })
      .then((Response) => Response.data);
  },
  logOut() {
    return instance.delete("auth/login").then((Response) => Response.data);
  },
};

export const subscribeAPI = {
  deleteUser(id) {
    return instance.delete(`follow/${id}`).then((Response) => Response.data);
  },
  postUser(id) {
    return instance.post(`follow/${id}`).then((Response) => Response.data);
  },
};
