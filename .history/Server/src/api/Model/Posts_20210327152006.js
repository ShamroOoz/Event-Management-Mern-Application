import { Schema, model } from "mongoose";

const Postschema = new Schema(
  {
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const PostsModal = model("User", Postschema);

export default PostsModal;
