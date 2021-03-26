import { Router } from "express";
const productRouter = Router();

productRouter.get("/", (req, res, next) => {
  res.send("All product Goes Here");
});

export default mainRouter;
