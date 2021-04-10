import { Router } from "express";
const postRouter = Router();

postRouter.get("/", (req, res, next) => {
  res.send("All Posts");
});

postRouter.post("/all", (req, res, next) => {
  res.send("All users Posts");
});

postRouter.delete("/all", (req, res, next) => {
  res.send("delete Posts");
});

export default postRouter;
