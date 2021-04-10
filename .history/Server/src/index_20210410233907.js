import express from "express";
import { dbconnection } from "./api/Helper/db";
import AuthMiddleware from "./api/Middlewares/is-auth";
import cors from "cors";
import morgan from "morgan";
import { PORT, NODE_ENV } from "../config";
//routers import
import {
  mainRouter,
  productRouter,
  usersRouter,
  postRouter,
} from "./api/Routers";

(async () => {
  try {
    //DB Connection
    await dbconnection().then(() => console.log("Connected to database"));
    //Init Express App
    const app = express();

    //setting up Port
    const Port = PORT || 4000;

    //init cors
    app.use(cors());

    //init Morgan
    app.use(morgan(NODE_ENV));

    //init Parsers
    app.use(express.json({ limit: "30mb", extended: true }));
    app.use(express.urlencoded({ limit: "30mb", extended: true }));

    //cross origion access
    app.use(cors());

    //auth  middleware
    app.use(AuthMiddleware);

    //Routes
    //Home page route
    app.use("/", mainRouter);
    //user route
    app.use("/user", usersRouter);
    // posts route
    app.use("/posts", postRouter);

    app.listen(Port, () =>
      console.log(`🚀 Server ready at http://localhost:${Port}`)
    );
  } catch (error) {
    console.error(error);
    throw new ApolloError(error);
  }
})();
