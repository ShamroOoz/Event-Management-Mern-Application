import { UserModal } from "../Model";
import mongoose from "mongoose";
import crypto from "crypto";

export const attemptSignIn = async ({ email, password }, res) => {
  const user = await UserModal.findOne({ email }).populate("createdposts");
  if (!user || !(await user.matchesPassword(password))) {
    throw { Error: "Incorrect email or password" };
  }
  let token = await user.createToken(user);
  return { user, token };
};

const signedIn = (req) => req.isAuth;

export const ensureSignedIn = (req, res, next) => {
  if (!signedIn(req)) {
    return res
      .status(401)
      .json(CustomError({ message: "Authentication Failed..." }));
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
  return Object.values(err);
};

export const getResetPasswordToken = () => {
  const resetToken = crypto.randomBytes(20).toString("hex");

  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  const resetPasswordExpire = Date.now() + 10 * (60 * 1000);
  return { { resetToken, resetPasswordToken, resetPasswordExpire } ;
};
