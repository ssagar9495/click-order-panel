"use client";
import React from "react";

const DeleteModal = ({ isOpen, onClose, onDelete }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="bg-white w-full max-w-md p-6 rounded-lg z-50">
            <h2 className="text-2xl font-bold mb-4">Delete Product</h2>
            <p className="text-gray-700 mb-4">
              Are you sure you want to delete this product?
            </p>
            <div className="flex justify-end">
              <button
                className="bg-red-500   hover:bg-red-600 text-white px-4 py-2 rounded mr-2"
                onClick={onDelete}
              >
                Delete
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModal;
