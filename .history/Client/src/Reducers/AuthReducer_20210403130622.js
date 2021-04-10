import * as actionType from "../Constants/actionTypes";
const AuthReducer = (
  state = { authData: null, loading: false, errors: null },
  action
) => {
  switch (action.type) {
    console.log(aya);
    case actionType.AUTH:
      return {
        ...state,
        authData: action.data,
        loading: action.loading,
        errors: action.error,
      };
    case actionType.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default AuthReducer;

//localStorage.getItem("profile")
