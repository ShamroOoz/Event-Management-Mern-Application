import { Router } from "express";
const usersRouter = Router();

usersRouter.get("/all", (req, res, next) => {
  res.send("All users");
});

export default usersRouter;
