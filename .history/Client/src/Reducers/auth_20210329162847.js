import * as actionType from "../Constants/actionTypes";
const auth = (state = { authData: null }, action) => {
  switch (action) {
    case actionType.AUTH:
      return state;

    default:
      return state;
  }
};

export default auth;
