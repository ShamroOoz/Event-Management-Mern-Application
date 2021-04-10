import { Router } from "express";
import { userController } from "../Controllers";
const usersRouter = Router();

usersRouter.get("/", userController.getme);
usersRouter.post("/singup", userController.creatUser);
usersRouter.post("/login", userController.loginUser);

export default usersRouter;
