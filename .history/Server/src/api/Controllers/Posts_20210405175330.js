import { PostsModal, UserModal } from "../Model";
import mongoose from "mongoose";
import { CustomError } from "../Helper/auth";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostsModal.find().populate("creator");
    res.send(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const creatPost = async (req, res) => {
  const { userId } = req;
  try {
    const newPost = new PostsModal({ ...req.body, creator: userId });
    const user = await UserModal.findByIdAndUpdate(
      { _id: userId },
      { $push: { createdposts: newPost } },
      { upsert: true }
    );
    const post = await newPost
      .save()
      .then((t) => t.populate("creator").execPopulate());
    res.status(200).json({ message: "Created Post Successfully....", post });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  const { userId } = req;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const docs = await PostsModal.findById({ _id: id }).populate("creator");
    //check creater and deletor are same
    if (userId === docs.creator._id) {
      await UserModal.findByIdAndUpdate(
        { _id: docs.creator._id },
        { $pull: { createdposts: docs._id } },
        { upsert: true }
      );
      await PostsModal.deleteOne(docs);
      return res
        .status(200)
        .json({ message: "Dleted Post Successfully....", status: true });
    }
    throw { Error: "You are not allowed to use this feature...." };
  } catch (error) {
    res.status(404).json({
      success: false,
      error: CustomError(error),
    });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send(`No post with id: ${_id}`);

    const updatedPost = await PostsModal.findByIdAndUpdate(_id, post, {
      new: true,
    }).populate("creator");

    res.status(200).json({
      message: "Update Post Successfully....",
      post: updatedPost,
      status: true,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const likePost = async (req, res) => {
  const { id } = req.params;
  const { userId } = req;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const post = await PostsModal.findById(id);

    const index = post.likeCount.findIndex((id) => id === String(userId));

    if (index === -1) {
      post.likeCount.push(userId);
    } else {
      post.likeCount = post.likeCount.filter((id) => id !== String(userId));
    }

    const updatedPost = await PostsModal.findByIdAndUpdate(id, post, {
      new: true,
    }).populate("creator");

    res.status(200).json({
      message: " Post Liked Successfully....",
      post: updatedPost,
      status: true,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
