import { Router } from "express";
import { postsController } from "../Controllers";
import { ensureSignedIn } from "../Helper/auth";

const postRouter = Router();

postRouter.get("/", postsController.getPosts);
postRouter.post("/creatpost", ensureSignedIn, postsController.creatPost);
postRouter.patch("/:id", ensureSignedIn, postsController.updatePost);
postRouter.patch("/:id/likePost", ensureSignedIn, postsController.likePost);
postRouter.delete("/:id", ensureSignedIn, postsController.deletePost);

export default postRouter;
