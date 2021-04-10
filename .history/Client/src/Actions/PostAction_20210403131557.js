import { AUTH } from "../Constants/actionTypes";
import * as api from "../Hooks/ApiHook";

export const getPosts = (formData, router) => async (dispatch) => {
  try {
    dispatch({ type: AUTH, data: null, loading: true, error: null });
    const { data } = await api.signIn(formData);
    if (data) {
      dispatch({ type: AUTH, data: data, error: null, loading: false });
      localStorage.setItem("profile", JSON.stringify(data));
      router.push("/");
    }
  } catch (error) {
    console.log(error);
  }
};
