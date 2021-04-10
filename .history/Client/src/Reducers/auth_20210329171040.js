import * as actionType from "../Constants/actionTypes";
const auth = (state = { authData: null }, action) => {
  switch (action) {
    case actionType.AUTH:
      localStorage.setItem("rememberMe", "memememememem");
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default auth;
