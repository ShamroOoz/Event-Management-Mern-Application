import { JOI_OPTION } from "../../../config";
import { attemptSignIn, CustomError } from "../Helper/auth";
import { SingupSchema, SignInSchema } from "../Helper/Schema";
import { UserModal, PostsModal } from "../Model";
import crypto from "crypto";
import sendEmail from "../Helper/SendEmail";

export const getme = async (req, res) => {
  try {
    const { userId } = req;
    const user = await UserModal.findById(userId).populate({
      path: "createdposts",
      model: PostsModal,
      populate: [
        {
          path: "creator",
          model: UserModal,
        },
      ],
    });

    return res.status(200).json({ user });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: CustomError(err),
    });
  }
};

export const OauthCreator = async (req, res) => {
  const { email, name, imageUrl } = req.body;
  try {
    const user = await UserModal.findOne({ email });
    if (!user) {
      const addUser = new UserModal({
        name: name,
        email: email,
        avatar: imageUrl,
        password: "SecretPassword123",
      });
      const Oauthuser = await addUser.save();
      let token = await Oauthuser.createToken(Oauthuser);
      return res.status(200).json({ user: Oauthuser, token });
    }
    let token = await user.createToken(user);
    return res.status(200).json({ user, token });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: CustomError(error),
    });
  }
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

export const forgotPaassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await UserModal.findOne({ email });

    if (!user) {
      throw { Error: "No Account Related to this Email find...Retry" };
    }

    // Reset Token Gen and add to database hashed (private) version of token
    const resetToken = user.getResetPasswordToken();

    await user.save();

    return res.status(200).json({ user ,resetToken });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: CustomError(err),
    });
  }
};
