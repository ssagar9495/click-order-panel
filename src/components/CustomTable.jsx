"use client";
import { IMAGES } from "@/constant/assets";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { ACTION_IDENTIFIER } from "@/constant/constants";

const TABLE_HEADING = [
  { title: "S No." },
  { title: "Image" },
  { title: "Prodict Name" },
  { title: "Description" },
  { title: "Price" },
  { title: "Action" },
];

const ACTION_MENU = [
  {
    identifier: ACTION_IDENTIFIER.EDIT,
    image: IMAGES.EDIT,
    tooltip: "tooltip-edit",
    className: "cursor-pointer",
  },
  {
    identifier: ACTION_IDENTIFIER.DELETE,
    image: IMAGES.DELETE,
    tooltip: "tooltip-delete",
    className: "px-2 cursor-pointer",
  },
  {
    identifier: ACTION_IDENTIFIER.VIEW,
    image: IMAGES.VIEW,
    tooltip: "tooltip-view",
    className: "cursor-pointer",
  },
];

const CustomTable = ({ onActionHandler, data }) => {
  return (
    <div className="flex flex-col px-8 mt-8">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {TABLE_HEADING.map((obj, i, arr) => {
                    return (
                      <th
                        key={`${obj.title}-${i}`}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {obj?.title}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data?.map((obj, i, arr) => (
                  <tr key={`${obj.name}-${i}`}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {i + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="flex items-center justify-center">
                        <div className="h-10 w-10 relative">
                          {obj.image ? (
                            <img
                              className="h-full w-full rounded-full"
                              src={obj.image}
                              alt="Product Image"
                            />
                          ) : (
                            <div className="h-full w-full bg-gray-200 rounded-full flex items-center justify-center">
                              <span className="text-gray-600 text-lg font-bold">
                                {obj.name.charAt(0).toUpperCase()}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="capitalize px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {obj?.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {obj?.description && obj.description.length > 40
                        ? `${obj.description.substring(0, 40)}...`
                        : obj.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ₹ {` ${obj?.price}`}
                    </td>
                    <td className="px-6 py-4  whitespace-nowrap text-right text-sm font-medium ">
                      <div style={{ display: "flex" }}>
                        {ACTION_MENU.map((actionObj, i, arr) => {
                          return (
                            <img
                              key={`${actionObj?.identifier}-${i}`}
                              src={actionObj.image}
                              data-tooltip-id={actionObj?.tooltip}
                              className={actionObj?.className}
                              onClick={() => onActionHandler(obj, actionObj)}
                            />
                          );
                        })}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {data?.length == 0 && (
            <p className="w-full mt-10 flex justify-center items-center h-full text-gray-500 text-xl font-bold	">
              No Products Found
            </p>
          )}
        </div>
      </div>
      <ReactTooltip id="tooltip-edit" place="bottom" content="Edit" />
      <ReactTooltip id="tooltip-delete" place="bottom" content="Delete" />
      <ReactTooltip id="tooltip-view" place="bottom" content="View" />
    </div>
  );
};
export default CustomTable;
