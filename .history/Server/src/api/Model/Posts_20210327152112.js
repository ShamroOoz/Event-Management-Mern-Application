import { Schema, model } from "mongoose";

const Postschema = new Schema(
  {
    title: {
      type: String,
    },
    message: {
      type: String,
    },
    creator: {
      type: String,
    },
    tags: {
      type: [String],
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
