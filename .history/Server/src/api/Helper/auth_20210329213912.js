import UserModal from "../Model";

export const attemptSignIn = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user || !(await user.matchesPassword(password))) {
    throw new AuthenticationError(
      "Incorrect email or password. Please try again."
    );
  }

  return user;
};
