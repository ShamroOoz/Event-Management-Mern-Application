import PostsModal from "../Model";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostsModal.find({}).exec();
    res.status(200).json(posts);
  } catch (error) {
    res.status().json({ message: error.message });
  }
};

export const creatPost = (req, res) => {
  res.send("All users Posts");
};

export const deletePost = (req, res) => {
  res.send("delete Posts");
};
