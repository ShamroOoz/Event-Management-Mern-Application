import { Router } from "express";
import usersRouter from "./User";
import postRouter from "./Posts";

//Home pAGE
const mainRouter = Router();

mainRouter.get("/", (req, res, next) => {
  res.send("Welcome to Home page ");
});

export { mainRouter, usersRouter, postRouter };
