import * as actionType from "../Constants/actionTypes";
const auth = (state = { authData: null }, action) => {
  switch (action) {
    case actionType.AUTH:
      localStorage.setItem("myValueInLocalStorage", action.data);
      return { ...state, authData: action.data, loading: false, errors: null };
    default:
      return state;
  }
};

export default auth;
