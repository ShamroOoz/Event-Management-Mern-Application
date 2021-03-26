import { verify } from "jsonwebtoken";
import { UsersModal } from "../Models/Users";

const AuthMiddleware = async (req, res, next) => {
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  const token = authHeader.split(" ")[1];
  if (!token || token === "") {
    req.isAuth = false;
    return next();
  }
  let decodedToken;
  try {
    decodedToken = verify(token, "SerectKeyApi");
  } catch (err) {
    req.isAuth = false;
    return next();
  }
  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }
  // If the user has valid token then Find the user by decoded token's email
  let authUser = await UsersModal.findOne({ email: decodedToken.email });
  if (!authUser) {
    req.isAuth = false;
    return next();
  }

  req.isAuth = true;
  req.userEmail = decodedToken.email;
  req.user = authUser;
  next();
};

export default AuthMiddleware;
