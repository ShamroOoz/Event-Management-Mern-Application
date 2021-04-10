import { JOI_OPTION } from "../../../config";
import {
  attemptSignIn,
  CustomError,
  getResetPasswordToken,
} from "../Helper/auth";
import { SingupSchema, SignInSchema } from "../Helper/Schema";
import { UserModal, PostsModal } from "../Model";
import { sendEmail } from "../Helper/SendEmail";
import crypto from "crypto";

///
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
      throw { Error: "No Account Attached to this Email..." };
    }

    const {
      resetPasswordToken,
      resetPasswordExpire,
      message,
    } = getResetPasswordToken();

    await sendEmail({
      to: user.email,
      subject: "Password Reset Request",
      text: message,
    });
    await UserModal.findOneAndUpdate(
      { email },
      { $set: { resetPasswordToken, resetPasswordExpire } },
      { upsert: true, returnNewDocument: true }
    );

    return res.status(200).json({
      success: true,
      error: ["Check your email inbox."],
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: CustomError(err),
    });
  }
};

export const resetPassword = async (req, res) => {
  // Compare token in URL params to hashed token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  try {
    const user = await UserModal.findOne(
      {
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
      },
      { runValidators: true, context: "query" }
    );

    if (!user) {
      throw { Error: "Invalid Token" };
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    return res.status(200).json({
      success: true,
      error: ["Success! Login Again.."],
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: CustomError({ Error: "Invalid Token" }),
    });
  }
};
