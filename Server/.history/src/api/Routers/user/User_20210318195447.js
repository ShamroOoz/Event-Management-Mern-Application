import { Router } from "express";
const userRouter = Router();

userRouter.get("/all", (req, res, next) => {
  res.send("All users");
});

userRouter.post("/all", (req, res, next) => {
  res.send("All users Post");
});

userRouter.delete("/all", (req, res, next) => {
  res.send("delete user");
});

export default userRouter;
