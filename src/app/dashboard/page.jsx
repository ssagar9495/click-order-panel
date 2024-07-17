"use client";
import { useState } from "react";
import {
  NavBar,
  PageHeader,
  CustomTable,
  DeleteModal,
  Pagination,
} from "@/components";
import { ACTION_IDENTIFIER } from "@/constant/constants";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { addProducts } from "@/redux/features/product/productSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import withAuth from "@/hoc/IsAuthenticate";

const Dashboard = () => {
  const products = useSelector((state) => state?.product?.product);
  const router = useRouter();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // On Table Action Handler
  const onActionHandler = (row, actionObj) => {
    switch (actionObj.identifier) {
      case ACTION_IDENTIFIER.EDIT:
        router.push(`/addedit/${row.id}`);
        break;
      case ACTION_IDENTIFIER.DELETE:
        setIsModalOpen(true);
        setSelectedProduct(row);
        break;
      case ACTION_IDENTIFIER.VIEW:
        router.push(`/viewproduct/${row.id}`);
        break;
      default:
        break;
    }
  };

  // On Add Product Click
  const onAddClick = () => {
    router.push(`/addedit/${0}`);
  };

  // On Delete Product confirm
  const handleDelete = () => {
    if (selectedProduct) {
      let withoutDeleteProduct = products?.filter((obj, i, arr) => {
        return obj.id != selectedProduct.id;
      });
      dispatch(addProducts([...withoutDeleteProduct]));
    }
    toast.success("Product Deleted Successfully");
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col ">
      <NavBar />
      <PageHeader
        heading="Product Management"
        subHeading="Manage your products efficiently"
        onAddClick={onAddClick}
        buttonText={"Add Product"}
      />
      <CustomTable onActionHandler={onActionHandler} data={currentItems} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={products?.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
        onDelete={handleDelete}
      />
    </div>
  );
};
export default withAuth(Dashboard);
