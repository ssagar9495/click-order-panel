"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter, useParams } from "next/navigation";
import { useLayoutEffect } from "react";
import { NavBar, PageHeader, ProductDetails } from "@/components";
import withAuth from "@/hoc/IsAuthenticate";

const ViewProduct = () => {
  const allProduct = useSelector((state) => state?.product?.product);
  const router = useRouter();
  const params = useParams();
  const { pid } = params;
  const [productData, setProductData] = useState({});

  useLayoutEffect(() => {
    if (pid && allProduct) {
      let getSelectedData = allProduct.find((product) => product.id == pid);
      console.log("getSelectedData==>", getSelectedData);
      if (getSelectedData) {
        setProductData(getSelectedData);
      }
    }
  }, [pid, allProduct]);

  const onBackClick = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col ">
      <NavBar />
      <PageHeader
        heading="Product Details"
        subHeading="View your products efficiently"
        onAddClick={onBackClick}
        buttonText={"Back"}
      />
      <ProductDetails product={productData} />
    </div>
  );
};
export default withAuth(ViewProduct);
