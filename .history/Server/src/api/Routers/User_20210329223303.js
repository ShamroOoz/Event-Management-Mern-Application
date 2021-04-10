import { Router } from "express";
import { userController } from "../Controllers";
const usersRouter = Router();

usersRouter.get("/", userController.getUser);

usersRouter.post("/singup", userController.creatUser);
usersRouter.post("/login", userController.loginUser);

export default usersRouter;
