import { JOI_OPTION } from "../../../config";
import { attemptSignIn, signOut } from "../helper/auth";

export const getUser = async (req, res) => {
  res.send("working");
};

export const creatUser = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  try {
    await SingupSchema.validateAsync(req.body, { ...JOI_OPTION });
    const addUser = new User({
      name: name,
      email: email,
      password: password,
    });
    console.log(addUser);
    //   const user = await addUser.save();
    //  return user;
  } catch (error) {
    throw new Error(error);
  }
};
