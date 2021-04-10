import { JOI_OPTION, jwtSecret } from "../../../config";
import { attemptSignIn, signOut } from "../helper/auth";
import { SingupSchema } from "../Helper/SingupSchema";
import { UserModal } from "../Model";
import jwt from "jsonwebtoken";

export const getUser = async (req, res) => {
  res.send("working");
};

export const creatUser = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  console.log(req.body);
  try {
    await SingupSchema.validateAsync(req.body, { ...JOI_OPTION });
    const addUser = new UserModal({
      name: name,
      email: email,
      password: password,
    });
    const user = await addUser.save();
    const token = jwt.sign({ email: user.email, userId: user._id }, jwtSecret, {
      expiresIn: 60 * 60,
    });
    return { user, token };
  } catch (error) {
    throw new Error(error);
  }
};
