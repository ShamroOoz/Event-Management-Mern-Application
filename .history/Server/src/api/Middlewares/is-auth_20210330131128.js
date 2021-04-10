import { verify } from "jsonwebtoken";
import { UserModal } from "../Model/User";
import { jwtSecret } from "../../../config";
const AuthMiddleware = async (req, res, next) => {
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  const token = authHeader.split(" ")[1];
  const googletoken = token.length < 500;

  if (!token || token === "") {
    req.isAuth = false;
    return next();
  }

  let decodedToken;
  try {
    if (token && googletoken) {
      decodedToken = verify(token, jwtSecret);
    }
  } catch (err) {
    req.isAuth = false;
    return next();
  }
  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }

  // If the user has valid token then Find the user by decoded token's  userID
  let authUser = await UserModal.findById({ _id: decodedToken.userId });
  if (!authUser) {
    req.isAuth = false;
    return next();
  }

  req.isAuth = true;
  req.userId = decodedToken.userId;
  req.userEmail = decodedToken.email;
  req.user = authUser;
  next();
};

export default AuthMiddleware;
