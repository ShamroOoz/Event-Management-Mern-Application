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
    req.user.update({ upsert: true });
    // await UserModal.findByIdAndUpdate(
    //   {
    //     _id: req.userId,
    //   },
    //   { $push: { createdposts: newPost } },
    //   { upsert: true }
    // );
    // await newPost.save();
    res.status(200).json({ message: "Created Post Successfully...." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletePost = (req, res) => {
  res.send("delete Posts");
};
