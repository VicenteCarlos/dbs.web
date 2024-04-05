import axios from "axios";

export const dbsAPI = axios.create({
  baseURL: "https://dragonball-api.com/api",
});
