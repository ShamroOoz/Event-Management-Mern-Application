import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../../../config";
const crypto = require("crypto");

const SALT_WORK_FACTOR = 10;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      validate: [
        async (name) => !(await UserModal.exists({ name })),
        "Name is already taken.",
      ],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [
        async (email) => !(await UserModal.exists({ email })),
        "Email is already taken.",
      ],
    },
    avatar: {
      type: String,
      default: null,
    },
    password: {
      type: String,
      required: true,
      default: null,
    },
    createdposts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Posts",
      },
    ],
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.matchesPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.createToken = function (user) {
  return jwt.sign({ email: user.email, userId: user._id }, jwtSecret, {
    expiresIn: 60 * 60,
  });
};

userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash token (private key) and save to database
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set token expire date
  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // Ten Minutes

  return resetToken;
};

const UserModal = model("Users", userSchema);
export default UserModal;
