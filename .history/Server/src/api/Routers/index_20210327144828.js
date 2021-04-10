import { Router } from "express";
import productRouter from "./Product";
import usersRouter from "./User";
import postRouter from "./Posts";

//Home pAGE
const mainRouter = Router();

mainRouter.get("/", (req, res, next) => {
  res.send("Home page data goes Here");
});
mainRouter.get("/home", (req, res, next) => {
  res.send("Home page data goes Here");
});

export { mainRouter, productRouter, usersRouter, postRouter };
