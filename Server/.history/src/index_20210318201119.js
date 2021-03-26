import express from "express";
import { dbconnection } from "./api/Helper/db";
import cors from "cors";
import morgan from "morgan";
//routers import
import mainRouter from "./api/Routers";
import userRouter from "./api/Routers/user";
import usersRouter from "./api/Routers/user/User";

//Init Express App
const app = express();
const Port = process.env.Port || 4000;

//init cors
app.use(cors());

//init Morgan
app.use(morgan("dev"));

//init Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//DB Connection
app.use(dbconnection);

//auth  middleware
// app.use(AuthMiddleware);

//Routes
//Home page route
app.use("/", mainRouter);
//user route
app.use("/user", userRouter);
app.use("/user", usersRouter);

app.listen(Port, () =>
  console.log(`🚀 Server ready at http://localhost${Port}`)
);
