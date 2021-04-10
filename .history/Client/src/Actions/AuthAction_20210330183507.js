import { AUTH } from "../Constants/actionTypes";
import * as api from "../Hooks/ApiHook";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const docs = await api.signIn(formData);
    if (docs) {
      const { data } = docs;
      dispatch({ type: AUTH, data });
      router.push("/");
    }
  } catch (error) {
    console.log(error);
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
