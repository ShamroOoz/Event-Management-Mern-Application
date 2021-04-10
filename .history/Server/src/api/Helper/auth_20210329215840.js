import UserModal from "../Model";

export const attemptSignIn = async ({ email, password }) => {
  const user = await UserModal.findOne({ email });
  console.log(user);
  if (!user || !(await user.matchesPassword(password))) {
    return console.log("Incorrect email or password. Please try again.");
  }
  return user;
};
