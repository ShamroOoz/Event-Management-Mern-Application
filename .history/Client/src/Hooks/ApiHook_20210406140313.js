import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("profile")}`;
  }
  return req;
});

//POST
export const fetchPosts = () => API.get("/posts/");
export const createPost = (newPost) => API.post("/posts/creatpost", newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const getMe = async () => await API.get("/user");

//AUTH
export const oAuthUser = async (formData) =>
  await API.post("user/oauth", formData);

export const signIn = async (formData) =>
  await API.post("/user/login", formData);

export const signUp = async (formData) =>
  await API.post("/user/singup", formData);
