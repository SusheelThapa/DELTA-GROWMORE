interface MARResult {
  dataStream: string;
  comment: string;
  indicator: string;
}

interface Props {
  results: MARResult[];
}

/**
 * MARTable component - renders a table displaying market analysis results.
 *
 * @param {Props} props - The props object containing the market analysis results.
 * @returns {TSX.Element} The rendered table component.
 */
const MARTable = ({ results }: Props) => {
  return (
    <div className="w-full mt-10  py-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-20">
        <table className="w-full leading-normal">
          <thead>
            {/* Table headers */}
            <tr>
              {/* Serial Number */}
              <th className="px-6 py-4 border-b-2 border-gray-300 bg-gray-100 text-left text-lg font-semibold text-gray-700 uppercase tracking-wider">
                S.No
              </th>
              {/* Data Stream */}
              <th className="px-6 py-4 border-b-2 border-gray-300 bg-gray-100 text-left text-lg font-semibold text-gray-700 uppercase tracking-wider">
                Data Stream
              </th>
              {/* Indicator */}
              <th className="px-6 py-4 border-b-2 border-gray-300 bg-gray-100 text-left text-lg font-semibold text-gray-700 uppercase tracking-wider">
                Comment
              </th>
              <th className="px-6 py-4 border-b-2 border-gray-300 bg-gray-100 text-left text-lg font-semibold text-gray-700 uppercase tracking-wider">
                Indicator
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Mapping through the results to create table rows */}
            {results.map(({ dataStream, comment, indicator }, index) => {
              return (
                <tr
                  className={`${
                    indicator == "Positive"
                      ? "hover:bg-green-200"
                      : indicator == "Caution"
                      ? "hover:bg-yellow-200"
                      : "hover:bg-red-200"
                  } transition duration-300`}
                  key={index}
                >
                  <td className="px-6 py-6 border-b bg-transparent border-gray-300  text-lg">
                    {index + 1}
                  </td>
                  <td className="px-6 py-6 border-b bg-transparent border-gray-300  text-lg">
                    {dataStream}
                  </td>
                  <td className="px-6 py-6 border-b bg-transparent border-gray-300  text-lg">
                    {comment}
                  </td>
                  <td className="px-6 py-6 border-b bg-transparent border-gray-300  text-lg">
                    {/* Indicator display */}
                    <span
                      className={`relative inline-block px-3 py-1 ${
                        indicator === "Positive"
                          ? "text-green-900"
                          : indicator == "Caution"
                          ? "text-yellow-900"
                          : "text-red-900 "
                      } font-semibold  leading-tight`}
                    >
                      <span
                        aria-hidden
                        className={`absolute inset-0 ${
                          indicator == "Positive"
                            ? "bg-green-300"
                            : indicator == "Caution"
                            ? "bg-yellow-300"
                            : "bg-red-300"
                        }  opacity-50 rounded-full`}
                      ></span>
                      <span className="relative">
                        {indicator === "Positive"
                          ? "Positive"
                          : indicator == "Caution"
                          ? "Caution"
                          : "Negative"}
                      </span>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MARTable;
