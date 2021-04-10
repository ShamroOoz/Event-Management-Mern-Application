require("dotenv").config();

export const {
  PORT = 4000,
  NODE_ENV = "dev",
  jwtSecret = "put secrest here",
  DB_URL = "mongodb://user:pass@localhost:port/database",
  EMAIL_SERVICE = "SendGird",
  EMAIL_USERNAME = "UserName",
  EMAIL_PASSWORD = "Password",
  EMAIL_FROM = "shamrozwarraich@gmail.com",
} = process.env;

export const IN_PROD = NODE_ENV === "production";

export const DB_URI = DB_URL;

export const DB_OPTIONS = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
export const JOI_OPTION = {
  abortEarly: false, // abort after the last validation error
  allowUnknown: true, // allow unknown keys that will be ignored
  stripUnknown: true, // remove unknown keys from the validated data
};
