import { JOI_OPTION, jwtSecret } from "../../../config";
import { attemptSignIn, ensureSignedIn } from "../Helper/auth";
import { SingupSchema, SignInSchema } from "../Helper/Schema";
import { UserModal } from "../Model";
import jwt from "jsonwebtoken";

export const getme = async (req, res) => {
  const { userId, isAuth, user } = req;
  if (!userId || !isAuth) {
    return res.status(500).json({ message: "Auth Failed" });
  }
  return res.status(200).json({ user });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // const { userId } = req.session;
    // if (userId) {
    //   return await User.findById(userId);
    // }
    await SignInSchema.validateAsync({ email, password }, { ...JOI_OPTION });
    const user = await attemptSignIn({ email, password }, res);
    const token = jwt.sign({ email: user.email, userId: user._id }, jwtSecret, {
      expiresIn: 60 * 60,
    });
    return res.status(200).json({ user, token });
  } catch (error) {
    return res.status(500).json({ error });
  }
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
