import PostsModal from "../Model";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostsModal.find()''
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const creatPost = async (req, res) => {
  const post = req.body;
  try {
    const posts = await PostsModal.save(post).exec();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletePost = (req, res) => {
  res.send("delete Posts");
};
