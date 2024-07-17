const ProductDetails = ({ product }) => {
  return (
    <div className="flex items-center h-screen bg-gray-100">
      <div className="max-w-4xl w-full mx-auto bg-white p-8 rounded-lg shadow-lg flex">
        {/* Product Image */}
        <div className="flex-none w-1/2">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
              <span className="text-gray-600 text-lg font-bold p-4">
                No Image Available
              </span>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex-auto ml-8">
          <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>

          {/* Additional Details */}
          <div className="flex items-center text-gray-500">
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 4a1 1 0 011 1v4a1 1 0 11-2 0V5a1 1 0 011-1zm2 10a1 1 0 11-2 0 1 1 0 012 0zm1-5a1 1 0 00-1-1h-1a1 1 0 100 2h1a1 1 0 001-1z"
                clipRule="evenodd"
              />
            </svg>
            <span>Category: {` ${product.category}`}</span>
          </div>

          <div className="flex items-center text-gray-500">
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 4a1 1 0 011 1v4a1 1 0 11-2 0V5a1 1 0 011-1zm2 10a1 1 0 11-2 0 1 1 0 012 0zm1-5a1 1 0 00-1-1h-1a1 1 0 100 2h1a1 1 0 001-1z"
                clipRule="evenodd"
              />
            </svg>
            <span>Price: {` ${product.price}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
