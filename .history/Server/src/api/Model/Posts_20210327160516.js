import { Schema, model } from "mongoose";

const Postschema = new Schema(
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

const PostsModal = model("User", Postschema);

export default PostsModal;
