import { JOI_OPTION } from "../../../config";
import { attemptSignIn, signOut } from "../helper/auth";
import { SingupSchema } from "../Helper/SingupSchema";
import UserModal from "../Model";

export const getUser = async (req, res) => {
  res.send("working");
};

export const creatUser = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  console.log(req.body);
  try {
    await SingupSchema.validateAsync(req.body, { ...JOI_OPTION });
    // const addUser = new UserModal({
    //   name: name,
    //   email: email,
    //   password: password,
    // });
    // console.log(addUser);
    //   const user = await addUser.save();
    //  return user;
  } catch (error) {
    throw new Error(error);
  }
};
