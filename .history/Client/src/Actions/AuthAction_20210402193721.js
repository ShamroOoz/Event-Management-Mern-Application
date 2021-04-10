import { AUTH, AUTH_REQUEST } from "../Constants/actionTypes";
import * as api from "../Hooks/ApiHook";

export const signin = (formData, router) => async (dispatch) => {
  try {
    dispatch({ type: AUTH_REQUEST });
    const { data } = await api.signIn(formData);
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
    dispatch({ type: AUTH_REQUEST });
    const { data } = await api.signUp(formData);
    if (data) {
      dispatch({ type: AUTH, data });
      localStorage.setItem("profile", JSON.stringify(data));
      router.push("/");
    }
  } catch (error) {
    dispatch({ type: AUTH, error });
    console.log(error.response.data);
  }
};
