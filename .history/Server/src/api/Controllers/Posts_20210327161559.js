import PostsModal from "../Model";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostsModal.find().exec();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const creatPost = (req, res) => {
  try {
  } catch (error) {}
};

export const deletePost = (req, res) => {
  res.send("delete Posts");
};
