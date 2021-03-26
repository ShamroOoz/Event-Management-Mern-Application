import { Router } from "express";
const mainRouter = Router();

mainRouter.get("/all", (req, res, next) => {
  res.send("Home page data goes Here");
});

export default mainRouter;
