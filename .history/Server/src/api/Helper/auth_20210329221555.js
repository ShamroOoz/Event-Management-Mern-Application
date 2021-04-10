import { UserModal } from "../Model";

export const attemptSignIn = async ({ email, password }, res) => {
  const user = await UserModal.findOne({ email });
  if (!user || !(await user.matchesPassword(password))) {
    return res.json("Incorrect email or password. Please try again.");
  }
  return user;
};

export const signOut = (req, res) =>
  new Promise((resolve, reject) => {
    req.session.destroy((err) => {
      localStorage.clear();
      if (err) reject(err);
      res.clearCookie(SESS_NAME);
      resolve(true);
    });
  });
