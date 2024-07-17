import * as Yup from "yup";

//Login Schema
export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address *")
    .required("Email is required *"),
  password: Yup.string()
    .required("Password is required *")
    .min(8, "Password is too short - should be 8 chars minimum *")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters *"),
});

// Add Edit Product
export const addEditProductSchema = Yup.object().shape({
  name: Yup.string().required("Product Name is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string().required("Description is required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .required("Price is required"),
});
