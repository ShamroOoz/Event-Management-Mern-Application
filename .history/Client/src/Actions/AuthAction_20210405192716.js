import { AUTH } from "../Constants/actionTypes";
import * as api from "../Hooks/ApiHook";

export const getLoginuser = () => async (dispatch) => {
  console.log("shshshshshsh");
};
export const signin = (formData, router) => async (dispatch) => {
  try {
    dispatch({ type: AUTH, data: null, loading: true, error: null });
    const { data } = await api.signIn(formData);
    if (data) {
      dispatch({ type: AUTH, data: data, error: null, loading: false });
      localStorage.setItem("profile", JSON.stringify(data));
      router.push("/");
    }
  } catch (error) {
    dispatch({
      type: AUTH,
      data: null,
      loading: false,
      error: error.response.data,
    });
  }
};
export const CreatOauth = (formData, router) => async (dispatch) => {
  try {
    dispatch({ type: AUTH, data: null, loading: true, error: null });
    const { data } = await api.oAuthUser(formData);
    if (data) {
      dispatch({ type: AUTH, data: data, error: null, loading: false });
      localStorage.setItem("profile", JSON.stringify(data));
      router.push("/");
    }
  } catch (error) {
    dispatch({
      type: AUTH,
      data: null,
      loading: false,
      error: error.response.data,
    });
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    dispatch({ type: AUTH, data: null, loading: true, error: null });
    const { data } = await api.signUp(formData);
    if (data) {
      dispatch({ type: AUTH, data: data, error: null, loading: false });
      localStorage.setItem("profile", JSON.stringify(data));
      router.push("/");
    }
  } catch (error) {
    dispatch({
      type: AUTH,
      data: null,
      loading: false,
      error: error.response.data,
    });
  }
};
