import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    creator: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: undefined,
      required: true,
    },
    selectedFile: {
      type: String,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
userSchema.pre("save", async function (req, res, next) {
  try {
    console.log(req.Auth);
    return next();
  } catch (err) {
    return next(err);
  }
});

const PostsModal = model("Posts", postSchema);

export default PostsModal;
