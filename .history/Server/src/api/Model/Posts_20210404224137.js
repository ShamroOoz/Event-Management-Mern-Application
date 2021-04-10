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
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
    tags: {
      type: [String],
      default: undefined,
      required: true,
    },
    avatar: {
      type: String,
    },
    likeCount: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const PostsModal = model("Posts", postSchema);

export default PostsModal;
