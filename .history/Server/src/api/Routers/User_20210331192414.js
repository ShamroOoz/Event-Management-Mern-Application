import { Router } from "express";
import { userController } from "../Controllers";
import { ensureSignedIn, ensuregoogleUser } from "../Helper/auth";
const usersRouter = Router();

usersRouter.get("/", ensureSignedIn, userController.getme);
usersRouter.post("/singup", ensuregoogleUser, userController.creatUser);
usersRouter.post("/login", userController.loginUser);

export default usersRouter;
