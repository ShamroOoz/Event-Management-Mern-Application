require("dotenv").config();

export const {
  PORT = 4000,
  NODE_ENV = "development",

  DB_URL = "Put the atlas url in env file",
} = process.env;

export const IN_PROD = NODE_ENV === "production";

export const DB_URI = DB_URL;

export const DB_OPTIONS = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
