import { Router } from "express";
const postRouter = Router();
import { postsController } from "../Controllers";

postRouter.get("/", postsController.getPosts);

postRouter.post("/creatpost", postsController.creatPost);

postRouter.patch("/:id", postsController.updatePost);

postRouter.delete("/:id", postsController.deletePost);

export default postRouter;
