import { Router } from "express";
const mainRouter = Router();

mainRouter.get("/home", (req, res, next) => {
  res.send("Home page data goes Here");
});

export default mainRouter;
