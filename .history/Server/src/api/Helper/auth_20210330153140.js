import { UserModal } from "../Model";

export const attemptSignIn = async ({ email, password }, res) => {
  const user = await UserModal.findOne({ email });
  if (!user || !(await user.matchesPassword(password))) {
    return res.json("Incorrect email or password. Please try again.");
  }
  return user;
};

const signedIn = (req) => req.isAuth;

export const ensureSignedIn = (req, res, next) => {
  if (!signedIn(req)) {
    return res.status(200).json({ message: "You must be signed in." });
  }
  next();
};
