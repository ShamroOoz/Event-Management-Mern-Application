import { UserModal } from "../Model";

export const attemptSignIn = async ({ email, password }, res) => {
  const user = await UserModal.findOne({ email });
  if (!user || !(await user.matchesPassword(password))) {
    return res.json("Incorrect email or password. Please try again.");
  }
  return user;
};
