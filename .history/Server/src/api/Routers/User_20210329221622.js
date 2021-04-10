import { Router } from "express";
import { userController } from "../Controllers";
const usersRouter = Router();

usersRouter.get("/", userController.getUser);

usersRouter.post("/singup", userController.creatUser);
usersRouter.post("/login", userController.loginUser);
usersRouter.get("/logout", userController.logoutUser);

export default usersRouter;
