import Joi from "joi";

const username = Joi.string()
  .alphanum()
  .trim()
  .min(4)
  .max(30)
  .required()
  .label("UserName");
const name = Joi.string().trim().min(3).max(300).required().label("Name");
const password = Joi.string()
  .regex(
    /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d).*$/,
    "Password must at least one lowercase letter, one uppercase letter, and one digit."
  )
  .min(8)
  .max(50)
  .message(
    " Password must have at least one lowercase letter, one uppercase letter, and one digit."
  )
  .required()
  .label("password");
const confirmPassword = Joi.string()
  .valid(Joi.ref("password"), "must match password")
  .required()
  .label("confirmPassword");
const email = Joi.string().email().trim().required().label("Email");

export const SingupSchema = Joi.object().keys({
  email,
  name,
  password,
  confirmPassword,
});

export const SignInSchema = Joi.object().keys({
  email,
  password,
});
