import { verify, decode } from "jsonwebtoken";
import { UserModal } from "../Model";
import { jwtSecret } from "../../../config";

const AuthMiddleware = async (req, res, next) => {
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  const token = authHeader.split(" ")[1];
  const customtoken = token.length < 500;

  if (!token || token === "") {
    req.isAuth = false;
    return next();
  }

  let decodedToken;
  let userId;
  try {
    if (token && customtoken) {
      decodedToken = verify(token, jwtSecret);
      userId = decodedToken.userId;
    } else {
      decodedToken = decode(token);
      userId = decodedToken?.sub;
    }
  } catch (err) {
    req.isAuth = false;
    return next();
  }

  // If the user has valid token then Find the user by decoded token's  userID
  let authUser = await (await UserModal.findById(userId)).populated(
    "createdposts"
  );
  if (!authUser) {
    req.isAuth = false;
    return next();
  }
  req.isAuth = true;
  req.userId = userId;
  req.user = authUser;
  next();
};

export default AuthMiddleware;
