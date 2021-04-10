import { Router } from "express";
const postRouter = Router();
import { postsController } from "../Controllers";

postRouter.get("/", postsController.getposts);

postRouter.post("/id", postsController.editpost);

postRouter.delete("/id", postsController.deletepost);

export default postRouter;
