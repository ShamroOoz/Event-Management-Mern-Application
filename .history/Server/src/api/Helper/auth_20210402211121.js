import { UserModal } from "../Model";
import mongoose from "mongoose";

export const attemptSignIn = async ({ email, password }, res) => {
  const user = await UserModal.findOne({ email });
  if (!user || !(await user.matchesPassword(password))) {
    throw new Error("Incorrect email or password.");
  }
  let token = await user.createToken(user);
  resolve({ user, token });
};

const signedIn = (req) => req.isAuth;

export const ensureSignedIn = (req, res, next) => {
  if (!signedIn(req)) {
    return res.status(401).json({ message: "Authentication Failed..." });
  }
  next();
};

// export const ensuregoogleUser = async (req, res, next) => {
//   const { email, name, googleId } = req.body;
//   if (googleId) {
//     const user = await UserModal.findOne({ email });
//     if (user) {
//       res.send("ok");
//     }
//     const addUser = new UserModal({
//       name: name,
//       email: email,
//       password: "Nr@??sham007",
//     });
//     await addUser.save();
//     res.send("ok");
//   }
//   next();
// };

export const CustomError = (err) => {
  if (!err._original && err.name === "ValidationError") {
    return Object.values(err.errors).map((val) => val.message);
  }
  if (err._original && err.name === "ValidationError") {
    return err.details.map((val) => val.message);
  }
  return Object.values(err);
};
