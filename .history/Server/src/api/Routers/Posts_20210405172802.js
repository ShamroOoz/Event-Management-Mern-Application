import { Router } from "express";
import { postsController } from "../Controllers";
import { ensureSignedIn } from "../Helper/auth";

const postRouter = Router();

postRouter.get("/", postsController.getPosts);

postRouter.post("/creatpost", postsController.creatPost);

postRouter.patch("/:id", postsController.updatePost);

postRouter.patch("/:id/likePost", postsController.likePost);

postRouter.delete("/:id", postsController.deletePost);

export default postRouter;
