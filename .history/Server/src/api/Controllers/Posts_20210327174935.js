import { PostsModal } from "../Model";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostsModal.find();
    res.send(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const creatPost = async (req, res) => {
  const post = req.body;
  console.log(post);
  try {
    const newPost = new PostsModal(post);
    const docs = await newPost.save().exec();
    res.status(200).json(docs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletePost = (req, res) => {
  res.send("delete Posts");
};
