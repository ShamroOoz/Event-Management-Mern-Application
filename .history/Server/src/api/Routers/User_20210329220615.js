import { Router } from "express";
import { userController } from "../Controllers";
const usersRouter = Router();

usersRouter.get("/", userController.getUser);

usersRouter.post("/singup", userController.creatUser);
usersRouter.post("/login", userController.loginUser);
usersRouter.post("/:id", userController.loginUser);

export default usersRouter;
