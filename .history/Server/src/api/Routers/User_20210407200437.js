import { Router } from "express";
import { userController } from "../Controllers";
import { ensureSignedIn } from "../Helper/auth";
const usersRouter = Router();

usersRouter.get("/", ensureSignedIn, userController.getme);
usersRouter.post("/singup", userController.creatUser);
usersRouter.post("/login", userController.loginUser);
usersRouter.post("/oauth", userController.OauthCreator);
usersRouter.post("/forgot-password", userController.forgotPaassword);
usersRouter.post("/resetpassword/:token", resetPassword.);

export default usersRouter;
