import * as Yup from "yup";

const name = Yup.string().trim().min(3).max(300).required().label("Name");

const password = Yup.string().required().label("password");
//   .(
//     /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d).*$/,
//     "Password must at least one lowercase letter, one uppercase letter, and one digit."
//   )
//   .min(8)
//   .max(50)
//   .message(
//     " Password must have at least one lowercase letter, one uppercase letter, and one digit."
//   )

const confirmPassword = Yup.string()
  .valid(Yup.ref("password"), "must match password")
  .required()
  .label("confirmPassword");
const email = Yup.string().email().trim().required().label("Email");

const title = Yup.string().required().label("Title");
const message = Yup.string().required().label("Message");
const tags = Yup.string().required().label("Tags");
export const SingupSchema = Yup.object().keys({
  email,
  name,
  password,
  confirmPassword,
});

export const SignInSchema = Yup.object({
  email,
  password,
});

export const CreatPostSchema = Yup.object({
  title,
  message,
  tags,
});
