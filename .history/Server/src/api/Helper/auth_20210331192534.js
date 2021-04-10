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

export const ensuregoogleUser = async (req, res, next) => {
  const { email, name, googleId } = req.body;
  console.log(googleId);
  // if (googleId) {
  //   const user = await UserModal.findOne({ email });
  //   if (user) {
  //     return;
  //   }
  //   const addUser = new UserModal({
  //     _id: googleId,
  //     name: name,
  //     email: email,
  //     password: "Nr@??sham007",
  //   });
  //   await addUser.save();
  //   return;
  // }
};
//var newId = new mongoose.mongo.ObjectId('56cb91bdc3464f14678934ca');

export const CustomError = (err) => {
  if (!err._original && err.name === "ValidationError") {
    return Object.values(err.errors).map((val) => val.message);
  }
  if (err._original && err.name === "ValidationError") {
    return err.details.map((val) => val.message);
  }
  return err;
};
