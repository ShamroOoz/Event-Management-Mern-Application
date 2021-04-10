import * as Yup from "yup";

// const name = Yup.string().trim().min(3).max(300).required().label("Name");

// const password = Yup.string().required().label("password");

// const confirmPassword = Yup.string()
//   .valid(Yup.ref("password"), "must match password")
//   .required()
//   .label("confirmPassword");

export const SingupSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
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
