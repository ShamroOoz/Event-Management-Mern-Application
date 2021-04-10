import { JOI_OPTION } from "../../../config";
import {
  attemptSignIn,
  CustomError,
  getResetPasswordToken,
} from "../Helper/auth";
import { SingupSchema, SignInSchema } from "../Helper/Schema";
import { UserModal, PostsModal } from "../Model";
import crypto from "crypto";
import sendEmail from "../Helper/SendEmail";
import { token } from "morgan";

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
    const {
      resetToken,
      resetPasswordToken,
      resetPasswordExpire,
    } = getResetPasswordToken();

    const user = await UserModal.findOneAndUpdate(
      { email },
      { $set: { resetPasswordToken, resetPasswordExpire } },
      { upsert: true, returnNewDocument: true }
    );
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: CustomError(err),
    });
  }
};

// const resetPasswordToken = crypto
//   .createHash("sha256")
//   .update(resetToken)
//   .digest("hex");

// const resetPasswordExpire = Date.now() + 10 * (60 * 1000);
/// // Reset Token Gen and add to database hashed (private) version of token
//  const resetToken = crypto.randomBytes(20).toString("hex");
// // Create reset url to email to provided email
// const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;

// // HTML Message
// const message = `
//   <h1>You have requested a password reset</h1>
//   <p>Please make a put request to the following link:</p>
//   <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
// `;

// try {
//   await sendEmail({
//     to: user.email,
//     subject: "Password Reset Request",
//     text: message,
//   });
//   return res.status(200).json({ success: true, data: "Email Sent", user });
// } catch (error) {
//   console.log(error);

//   user.resetPasswordToken = undefined;
//   user.resetPasswordExpire = undefined;

//   await user.save();
//   throw { Error: "Email could not be sent" };
// }
