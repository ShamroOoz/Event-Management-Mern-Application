import { Router } from "express";
const postRouter = Router();

postRouter.get("/", (req, res, next) => {
  res.send("All Posts");
});

postRouter.post("/id", (req, res, next) => {
  res.send("All users Posts");
});

postRouter.delete("/is", (req, res, next) => {
  res.send("delete Posts");
});

export default postRouter;
