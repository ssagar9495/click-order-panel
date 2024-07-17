"use client";
import { useRouter, useParams } from "next/navigation";
import { NavBar, PageHeader, ErrorMessage } from "@/components";
import { useFormik } from "formik";
import { addEditProductSchema } from "@/constant/validations";
import { useSelector } from "react-redux";
import { useLayoutEffect, useState } from "react";
import { CATERGORY } from "@/constant/constants";
import { useDispatch } from "react-redux";
import { addProducts } from "@/redux/features/product/productSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import withAuth from "@/hoc/IsAuthenticate";

const initialValues = {
  name: "",
  category: "",
  description: "",
  price: "",
};

const AddEdit = () => {
  const allProduct = useSelector((state) => state?.product?.product);
  const router = useRouter();
  const params = useParams();
  const { pid } = params;
  const dispatch = useDispatch();
  const [editProduct, setEditProduct] = useState({});

  useLayoutEffect(() => {
    if (pid !== "0") {
      let selectedProduct = allProduct?.find((obj, i, arr) => {
        return obj.id == pid;
      });
      setEditProduct(selectedProduct);
    }
  }, []);

  // on form submit
  const onSubmit = (values, { isSubmitting }) => {
    if (pid === "0") {
      // Add Case
      let obj = {
        id: Math.floor(Math.random() * 100) + 1,
        ...values,
      };
      dispatch(addProducts([...allProduct, obj]));
    } else {
      // Edit Case
      let obj = {
        id: pid,
        ...values,
      };
      let withoutEditProduct = allProduct?.filter((obj, i, arr) => {
        return obj.id != pid;
      });
      dispatch(addProducts([...withoutEditProduct, obj]));
    }
    toast.success(
      pid === "0"
        ? "Product Added Successfully"
        : "Product Updated Successfully"
    );
    router.push("/dashboard");
  };

  const formik = useFormik({
    initialValues: pid === "0" ? initialValues : editProduct,
    validationSchema: addEditProductSchema,
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

  //  On Back Button Click
  const onBackClick = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col ">
      <NavBar />
      <PageHeader
        heading="Add Product"
        subHeading="Add your products efficiently"
        onAddClick={onBackClick}
        buttonText="Back"
      />
      <div className="w-full flex justify-center">
        <div className="p-8 w-3/5	">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={values?.name}
                onFocus={() => setFieldTouched("name", true)}
                onChange={(e) => setFieldValue("name", e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                errors={errors}
                field_name={"name"}
                touched={touched}
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                defaultValue={values?.category}
                value={values?.category}
                onFocus={() => setFieldTouched("category", true)}
                onChange={(e) => setFieldValue("category", e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="" disabled={true} selected={true}>
                  Select a category
                </option>
                {CATERGORY?.map((menuobj, i, arr) => {
                  return (
                    <option
                      key={`${menuobj?.label}-${i}`}
                      value={menuobj?.value}
                    >
                      {menuobj?.label}
                    </option>
                  );
                })}
              </select>
              <ErrorMessage
                errors={errors}
                field_name={"category"}
                touched={touched}
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="4"
                value={values?.description}
                onFocus={() => setFieldTouched("description", true)}
                onChange={(e) => setFieldValue("description", e.target.value)}
                className="resize-none appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
              <ErrorMessage
                errors={errors}
                field_name={"description"}
                touched={touched}
              />
            </div>

            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={values?.price}
                onFocus={() => setFieldTouched("price", true)}
                onChange={(e) => setFieldValue("price", e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage
                errors={errors}
                field_name={"price"}
                touched={touched}
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {pid === "0" ? "Add" : "Update"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default withAuth(AddEdit);
