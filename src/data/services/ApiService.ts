import axios from "axios";

export const api = axios.create({
  baseURL: "https://ediaristas-workshop.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});
