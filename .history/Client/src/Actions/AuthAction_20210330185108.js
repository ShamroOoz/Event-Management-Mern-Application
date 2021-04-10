import { AUTH } from "../Constants/actionTypes";
import axios from "axios";
import * as api from "../Hooks/ApiHook";

const API = axios.create({ baseURL: "http://localhost:4000/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await API.post("/user/login", formData);
    if (data) {
      dispatch({ type: AUTH, data });
      router.push("/");
    }
  } catch (error) {
    console.log(error.response.data);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
