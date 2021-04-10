import { Router } from "express";
import { userController } from "../Controllers";
import { ensureSignedIn } from "../Helper/auth";
const usersRouter = Router();

usersRouter.get("/", ensureSignedIn, userController.getme);
usersRouter.post("/singup", userController.creatUser);
usersRouter.post("/login", userController.loginUser);
usersRouter.post("/oauth", userController.OauthCreator);

export default usersRouter;
