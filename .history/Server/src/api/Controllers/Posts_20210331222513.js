import { PostsModal, UserModal } from "../Model";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostsModal.find();
    res.send(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const creatPost = async (req, res) => {
  try {
    const newPost = new PostsModal({ ...req.body, creator: req.userId });
    req.user.createdposts.push(newPost);
    await req.user.update();
    await newPost.save();
    res.status(200).json({ message: "created post" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletePost = (req, res) => {
  res.send("delete Posts");
};
