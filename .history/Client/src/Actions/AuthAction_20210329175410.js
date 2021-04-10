import { useHistory } from "react-router-dom";
import { AUTH } from "../Constants/actionTypes";
import { useDispatch } from "react-redux";

 
 const AuthAction = () => {
     const history = useHistory();
     const dispatch = useDispatch();

     const  = () => async (dispatch) => {
       try {
         dispatch({ type: AUTH, data: { result, token } });

         router.push("/");
       } catch (error) {
         console.log(error);
       }
     };
  return {
    googlesignin
  };

 }
 
 export default AuthAction
 
 