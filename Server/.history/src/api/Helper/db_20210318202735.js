import mongoose from "mongoose";

//db

const url = `mongodb+srv://${process.env.DB_HOST}:shamroz123@cluster0.qdmwj.mongodb.net/Shop?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

export const dbconnection = (req, res, next) => {
  mongoose
    .connect(url, connectionParams)
    .then(() => {
      console.log("Connected to database ");
      next();
    })
    .catch((err) => {
      console.error(`Error connecting to the database. \n${err}`);
      res.send({ err: `Database Connectio lost....` });
    });
};
