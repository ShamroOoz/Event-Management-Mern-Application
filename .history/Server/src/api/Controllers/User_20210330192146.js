import { JOI_OPTION } from "../../../config";
import { attemptSignIn, styleError } from "../Helper/auth";
import { SingupSchema, SignInSchema } from "../Helper/Schema";
import { UserModal } from "../Model";

export const getme = async (req, res) => {
  const { user } = req;
  return res.status(200).json({ user });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    await SignInSchema.validateAsync({ email, password }, { ...JOI_OPTION });
    const { user, token } = await attemptSignIn({ email, password }, res);
    return res.status(200).json({ user, token });
  } catch (error) {
    if (err.name === "ValidationError") {
      const message = object.values(err.errors).map((val) => val.message);
      return res.status(500).json({
        success: false,
        error: err,
      });
    } else {
      return res.status(500).json({
        success: false,
        error,
      });
    }
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
    let token = await user.createToken(user);
    return res.status(200).json({ user, token });
  } catch (error) {
    return res.status(500).json(error);
  }
};
