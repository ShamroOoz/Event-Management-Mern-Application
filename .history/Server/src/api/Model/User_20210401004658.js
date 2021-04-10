import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { jwtSecret } from "../../../config";

const SALT_WORK_FACTOR = 10;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      validate: [
        async (name, id) => {
          console.log(id);
          return !(await UserModal.exists({ name }));
        },
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

userSchema.methods.updateposts = function (postId) {
  this.createdposts.push(postId);
};

userSchema.methods.matchesPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.createToken = function (user) {
  return jwt.sign({ email: user.email, userId: user._id }, jwtSecret, {
    expiresIn: 60 * 60,
  });
};

const UserModal = model("Users", userSchema);
export default UserModal;
