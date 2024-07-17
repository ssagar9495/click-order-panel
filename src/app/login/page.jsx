"use client";
import React from "react";
import { useFormik } from "formik";
import { login } from "@/redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { ErrorMessage } from "@/components";
import { loginSchema } from "@/constant/validations";
import { addProducts } from "@/redux/features/product/productSlice";
import { JSON_STATIC_DATA } from "@/constant/DummyData";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import withAuthRedirect from "@/hoc/withAuthRediect";

const initialValues = { email: "", password: "" };

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  // On form submit handler
  const onSubmit = (values, { setSubmitting }) => {
    if (
      values?.email === "admin@yopmail.com" &&
      values?.password === "Admin@1234"
    ) {
      dispatch(login(values));
      dispatch(addProducts(JSON_STATIC_DATA));
      toast.success("Login successfully");
      router.push("/dashboard");
    } else {
      alert("Check Credntials");
    }
    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: onSubmit,
    enableReinitialize: true,
  });

  const {
    values,
    errors,
    touched,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
  } = formik;

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <p className="text-3xl font-bold text-emerald-500 flex justify-center">
            Click Order
          </p>
          <h4 className="text-center text-1xl mt-2 text-gray-900">
            Sign in to your account
          </h4>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onFocus={() => setFieldTouched("email", true)}
                    value={values.email}
                    autoComplete="email"
                    onChange={(e) => setFieldValue("email", e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage
                    errors={errors}
                    field_name={"email"}
                    touched={touched}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onFocus={() => setFieldTouched("password", true)}
                    value={values.password}
                    autoComplete="current-password"
                    onChange={(e) => setFieldValue("password", e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage
                    errors={errors}
                    field_name={"password"}
                    touched={touched}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-emerald-500 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default withAuthRedirect(Login);
