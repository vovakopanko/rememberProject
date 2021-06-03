import axios from "axios";

export const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "8256ff37-d3d1-441d-908a-445078d78397",
  },
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
});
