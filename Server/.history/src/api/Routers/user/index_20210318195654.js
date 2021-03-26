import { Router } from "express";
const userRouter = Router();

userRouter.get("/", (req, res, next) => {
  res.send("get all the data of the specfic user");
});
