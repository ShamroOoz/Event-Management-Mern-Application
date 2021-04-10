import { JOI_OPTION } from "../../../config";
import { attemptSignIn, CustomError } from "../Helper/auth";
import { SingupSchema, SignInSchema } from "../Helper/Schema";
import { UserModal } from "../Model";

export const getme = async (req, res) => {
  const { user } = req;
  return res.status(200).json({ user });
};

export const OauthCreator = async (req, res) => {
  const { email, name, token } = req.body;
  try {
    const user = await UserModal.findOne({ email }).populate("createdposts");
    if (!user) {
      const addUser = new UserModal({
        name: name,
        email: email,
        password: "SecretPassword123",
      });
      const Oauthuser = await addUser.save();
      return res.status(200).json({ Oauthuser, token });
    }
    return res.status(200).json({ user, token });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: CustomError(err),
    });
  }

  res.send("Oauth setting");
};
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    await SignInSchema.validateAsync({ email, password }, { ...JOI_OPTION });
    const { user, token } = await attemptSignIn({ email, password }, res);
    return res.status(200).json({ user, token });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: CustomError(err),
    });
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
    return res.status(500).json({
      success: false,
      error: CustomError(err),
    });
  }
};
