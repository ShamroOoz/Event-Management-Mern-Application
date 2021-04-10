import * as Yup from "yup";

const name = Yup.string().trim().min(3).max(300).required().label("Name");

const password = Yup.string().required().label("password");

const confirmPassword = Yup.string()
  .valid(Yup.ref("password"), "must match password")
  .required()
  .label("confirmPassword");
const email = Yup.string().email().trim().required().label("Email");

const title = Yup.string().required().label("Title");
const message = Yup.string().required().label("Message");
const tags = Yup.string().required().label("Tags");

export const SingupSchema = Yup.object({
  email: Yup.string().required("Required"),
  name: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string().required("Required"),
});

export const SignInSchema = Yup.object({
  name: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

export const CreatPostSchema = Yup.object({
  title: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
  tags: Yup.string().required("Required"),
});
