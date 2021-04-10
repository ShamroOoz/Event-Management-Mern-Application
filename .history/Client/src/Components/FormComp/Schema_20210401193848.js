import * as Yup from "yup";

const name = Yup.string().trim().min(3).max(300).required().label("Name");

const password = Yup.string()
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
const confirmPassword = Yup.string()
  .valid(Yup.ref("password"), "must match password")
  .required()
  .label("confirmPassword");
const email = Yup.string().email().trim().required().label("Email");

export const SingupSchema = Yup.object().keys({
  email,
  name,
  password,
  confirmPassword,
});

export const SignInSchema = Yup.object().keys({
  email,
  password,
});

export const CreatPostSchema = Yup.object().keys({
  title,
  message,
  tags,
});
