import { UserModal } from "../Model";

export const attemptSignIn = async ({ email, password }, res) => {
  const user = await UserModal.findOne({ email });
  if (!user || !(await user.matchesPassword(password))) {
    throw new Error({
      message: "Incorrect email or password. Please try again.",
    });
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
