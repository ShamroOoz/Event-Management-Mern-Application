import { PostsModal, UserModal } from "../Model";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostsModal.find();
    res.send(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const creatPost = async (req, res) => {
  const { userId } = req;
  try {
    const newPost = new PostsModal({ ...req.body, creator: userId });
    await UserModal.findByIdAndUpdate(
      { _id: userId },
      { $push: { createdposts: newPost } },
      { upsert: true }
    );
    const post = await newPost.save();
    res.status(200).json({ message: "Created Post Successfully....", post });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const docs = await PostsModal.findById(id).populate("creator");
    console.log(docs.creator._id);

    // await UserModal.findByIdAndUpdate(
    //   { _id: docs.creator._id },
    //   { $pull: { createdposts: docs._id } },
    //   { upsert: true }
    // );
    //  await PostsModal.deleteOne(docs);
    res.status(200).json({ message: "Dleted Post Successfully...." });
  } catch (error) {
    res.status(404).json({ message: error.message });
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
    });

    res
      .status(200)
      .json({ message: "Update Post Successfully....", updatedPost });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const likePost = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No post with id: ${id}`);

    const post = await PostsModal.findById(id);

    const updatedPost = await PostsModal.findByIdAndUpdate(
      id,
      { $set: { likeCount: post.likeCount + 1 } },
      { new: true }
    );

    res
      .status(200)
      .json({ message: " Post Liked Successfully....", data: updatedPost });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
