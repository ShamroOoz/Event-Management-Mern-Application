import { Router } from "express";
const usersRouter = Router();

usersRouter.get("/", (req, res, next) => {
  res.send("get all the data of the specfic user");
});

usersRouter.get("/all", (req, res, next) => {
  res.send("All users");
});

usersRouter.post("/all", (req, res, next) => {
  res.send("All users Post");
});

usersRouter.delete("/all", (req, res, next) => {
  res.send("delete user");
});

export default usersRouter;
