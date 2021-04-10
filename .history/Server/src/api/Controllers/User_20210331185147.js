import { JOI_OPTION } from "../../../config";
import { attemptSignIn, CustomError, userType } from "../Helper/auth";
import { SingupSchema, SignInSchema } from "../Helper/Schema";

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
    return res.status(500).json({
      success: false,
      error: CustomError(err),
    });
  }
};

export const creatUser = async (req, res) => {
  try {
    if (!req.body.googleId)
      await SingupSchema.validateAsync(req.body, { ...JOI_OPTION });
    addUser = await userType(req);
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
