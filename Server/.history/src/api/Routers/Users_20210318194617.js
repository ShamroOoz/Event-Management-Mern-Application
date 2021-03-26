import { Router } from "express";
export const userRouter = Router();
import { UsersModal } from "../Models/Users";

userRouter.get("/all", (req, res, next) => {
  res.send("All users");
});
