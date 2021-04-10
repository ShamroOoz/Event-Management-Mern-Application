import * as actionType from "../Constants/actionTypes";

const AuthReducer = (
  state = { authData: null, loading: false, errors: null },
  action
) => {
  switch (action.type) {
    case actionType.AUTH:
      console.log(object);
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default AuthReducer;
