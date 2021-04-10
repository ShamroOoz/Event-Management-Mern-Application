import { Router } from "express";
const postRouter = Router();
import { postsController } from "../Controllers";

postRouter.get("/", postsController.getPosts);

postRouter.post("/id", postsController.editPost);

postRouter.delete("/id", postsController.deletePost);

export default postRouter;
