const PageHeader = ({ heading, subHeading, onAddClick, buttonText }) => {
  return (
    <div className="bg-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900">{heading}</h2>
          <p className="mt-1 text-lg text-gray-600">{subHeading}</p>
        </div>
        <div>
          <button
            className="bg-emerald-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={onAddClick}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};
export default PageHeader;
