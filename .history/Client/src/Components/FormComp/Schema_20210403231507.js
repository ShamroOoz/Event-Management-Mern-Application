import * as Yup from "yup";

export const SingupSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  name: Yup.string().trim().min(3).max(300).required("Required"),
  password: Yup.string()
    .matches(
      /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d).*$/,
      "Password must at least one lowercase letter, one uppercase letter, and one digit."
    )
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Required"),
});

export const SignInSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string()
    .matches(
      /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d).*$/,
      "Password must at least one lowercase letter, one uppercase letter, and one digit."
    )
    .required("Required"),
});

export const CreatPostSchema = Yup.object({
  title: Yup.string().min(3).max(300).required("Required"),
  message: Yup.string().min(3).max(300).required("Required"),
  tags: Yup.string("Must Be a String").required("Required"),
  // avatar: Yup.string().required("Required"),
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
  avatar: "",
};
