import axios from "axios";

const newRequest = axios.create({
  // baseURL: "http://localhost:8080/api/",
  baseURL: "https://fiver-app.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
