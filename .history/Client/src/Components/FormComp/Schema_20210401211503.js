import * as Yup from "yup";

export const SingupSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  name: Yup.string().trim().min(3).max(300).required("Required"),
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
  title: Yup.string().trim().min(3).max(300).required("Required"),
  message: Yup.string().trim().min(3).max(300).required("Required"),
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
