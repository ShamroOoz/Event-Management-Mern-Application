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
  title: Yup.string().trim().min(3).max(300).required("Required"),
  message: Yup.string().trim().min(3).max(300).required("Required"),
  tags: Yup.string().trim().required("Required"),
  avatar:yup
    .mixed()
    .required("You need to provide a file")
    .test("fileSize", "The file is too large", (value) => {
        return value && value[0].sienter code hereze <= 2000000;
    })
    .test("type", "Only the following formats are accepted: .jpeg, .jpg, .bmp, .pdf and .doc", (value) => {
        return value && (
            value[0].type === "image/jpeg" ||
            value[0].type === "image/bmp" ||
            value[0].type === "image/png" ||
            value[0].type === 'application/pdf' ||
            value[0].type === "application/msword"
        );
    }),
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
