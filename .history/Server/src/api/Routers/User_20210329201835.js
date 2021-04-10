import { Router } from "express";
import { userController } from "../Controllers";
const usersRouter = Router();

usersRouter.get("/", userController.getUser);

usersRouter.delete("/:id", (req, res, next) => {
  res.send("delete user");
});

export default usersRouter;
