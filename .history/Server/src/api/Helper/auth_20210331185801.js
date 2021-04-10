import { UserModal } from "../Model";
import mongoose from "mongoose";

export const attemptSignIn = async ({ email, password }, res) => {
  const user = await UserModal.findOne({ email });
  if (!user || !(await user.matchesPassword(password))) {
    throw new Error("Incorrect email or password. Please try again.");
  }
  let token = await user.createToken(user);
  return { user, token };
};

const signedIn = (req) => req.isAuth;

export const ensureSignedIn = (req, res, next) => {
  if (!signedIn(req)) {
    return res.status(401).json({ message: "You must be signed in." });
  }
  next();
};

export const CustomError = (err) => {
  if (!err._original && err.name === "ValidationError") {
    return Object.values(err.errors).map((val) => val.message);
  }
  if (err._original && err.name === "ValidationError") {
    return err.details.map((val) => val.message);
  }
  return err;
};

export const userType = async (req) => {
  const { email, password, name } = req.body;
  const addUser = new UserModal({
    name: name,
    email: email,
    password: password,
  });

  return addUser;
};
