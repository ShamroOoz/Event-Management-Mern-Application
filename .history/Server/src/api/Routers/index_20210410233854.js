import { Router } from "express";
import usersRouter from "./User";
import postRouter from "./Posts";

//Home pAGE
const mainRouter = Router();

mainRouter.get("/", (req, res, next) => {
  res.send("Home page data goes Here");
});

export { mainRouter, usersRouter, postRouter };
