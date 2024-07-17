"use client";
const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="fixed bottom-0 w-full shadow-md">
      <ul className="pagination flex justify-center items-center mx-auto max-w-7xl py-4">
        {/* Previous button */}
        <li className="page-item">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200"
            } bg-gray-100 text-gray-700 px-3 py-1 rounded-l-md focus:outline-none`}
          >
            Previous
          </button>
        </li>

        {/* Page numbers */}
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={() => paginate(number)}
              className={`${
                currentPage === number
                  ? "bg-emerald-500 text-white hover:bg-blue-600"
                  : "hover:bg-gray-200"
              } mx-1 px-3 py-1 rounded-md focus:outline-none`}
            >
              {number}
            </button>
          </li>
        ))}

        {/* Next button */}
        <li className="page-item">
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
            className={`${
              currentPage === Math.ceil(totalItems / itemsPerPage)
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-200"
            } bg-gray-100 text-gray-700 px-3 py-1 rounded-r-md focus:outline-none`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
