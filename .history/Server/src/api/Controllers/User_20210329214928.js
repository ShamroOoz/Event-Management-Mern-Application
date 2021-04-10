import { JOI_OPTION, jwtSecret } from "../../../config";
import { attemptSignIn, signOut } from "../helper/auth";
import { SingupSchema } from "../Helper/SingupSchema";
import { UserModal } from "../Model";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
  const data = ({ email, password } = req.body);
  try {
    // const { userId } = req.session;
    // if (userId) {
    //   return await User.findById(userId);
    // }
    const data = { email, password };
    console.log(data);
    await SignInSchema.validateAsync({ email, password }, { ...JOI_OPTION });
    const user = await attemptSignIn({ email, password });
    const token = jwt.sign({ email: user.email, userId: user._id }, jwtSecret, {
      expiresIn: 60 * 60,
    });
    console.log(user);
    console.log(token);
    // return res.status(200).json({ user, token });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getUser = async (req, res) => {
  res.send("working");
};

export const creatUser = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
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
    return res.status(200).json({ user, token });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
