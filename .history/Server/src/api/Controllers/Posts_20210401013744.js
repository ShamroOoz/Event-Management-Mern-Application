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
  const { userId } = req;
  try {
    const newPost = new PostsModal({ ...req.body, creator: userId });
    await UserModal.findByIdAndUpdate(
      { _id: userId },
      { $push: { createdposts: newPost } },
      { upsert: true }
    );
    await newPost.save();
    res.status(200).json({ message: "Created Post Successfully...." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const docs = await PostsModal.findById(id).populate("creator");
    console.log(docs);

    //let user = docs._doc.creator;

    //     user.createdevents.pop(docs);
    // await user.save();
    //     await PostsModal.deleteOne(docs);

    res.status(200).json({ message: "Created Post Successfully...." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
