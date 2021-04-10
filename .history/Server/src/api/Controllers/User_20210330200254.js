import { JOI_OPTION } from "../../../config";
import { attemptSignIn } from "../Helper/auth";
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
  } catch (err) {
    return res.status(500).json(error);
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
  } catch (err) {
    console.log(err);
    if (!err._original && err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(500).json({
        success: false,
        error: messages,
      });
    } else {
      const messages = err.details.map((val) => val.message);
    }
    return res.status(500).json({
      success: false,
      err,
    });
  }
};
