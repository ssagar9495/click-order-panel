const ErrorMessage = ({ errors, field_name, touched }) => {
  return (
    <>
      {errors?.[field_name] && touched?.[field_name] ? (
        <p className="text-red-500 text-xs italic ml-1">
          {errors?.[field_name]}
        </p>
      ) : (
        <p className="invisible text-red-500 text-xs italic ml-1">
          {" "}
          Space area
        </p>
      )}
    </>
  );
};
export default ErrorMessage;
