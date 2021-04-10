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

export const ResetSchema = Yup.object({
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

export const ForgetSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
});

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];
const FILE_SIZE = 160 * 1024;

export const CreatPostSchema = Yup.object({
  title: Yup.string().trim().min(3).max(300).required("Required"),
  message: Yup.string().trim().min(3).max(300).required("Required"),
  tags: Yup.array()
    .min(2, "Must have at least one tag")
    .max(4, "That is too many tag")
    .required("Required"),
  avatar: Yup.mixed()
    .required("A file is required")
    .test(
      "FileSize",
      "File too large",
      (value) => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      (value) => value && SUPPORTED_FORMATS.includes(value.type)
    ),
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
  tags: [""],
  avatar: undefined,
};
