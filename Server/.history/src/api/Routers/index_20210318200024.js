import { Router } from "express";
const mainRouter = Router();

mainRouter.get("/all", (req, res, next) => {
  res.send("All users");
});

export default mainRouter;
