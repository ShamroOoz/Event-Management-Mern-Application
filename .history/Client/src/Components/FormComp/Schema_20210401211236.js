import * as Yup from "yup";

// const name = Yup.string().trim().min(3).max(300).required().label("Name");

// const password = Yup.string().required().label("password");

export const SingupSchema = Yup.object({
  email: Yup.string().trim().email("Invalid email format").required("Required"),
  name: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Required"),
});

export const SignInSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});

export const CreatPostSchema = Yup.object({
  title: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
  tags: Yup.string().required("Required"),
});

export const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const CreatPostValues = {
  title: "",
  message: "",
  tags: "",
};
