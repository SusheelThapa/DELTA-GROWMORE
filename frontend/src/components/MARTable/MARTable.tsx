interface MARResult {
  dataStream: string;
  comment: string;
  indicator: string;
}

interface Props {
  results: MARResult[];
}

const MARTable = ({ results }: Props) => {
  return (
    <div className="w-full mt-10  py-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-20">
        <table className="w-full leading-normal">
          <thead>
            <tr>
              <th className="px-6 py-4 border-b-2 border-gray-300 bg-gray-100 text-left text-lg font-semibold text-gray-700 uppercase tracking-wider">
                S.No
              </th>
              <th className="px-6 py-4 border-b-2 border-gray-300 bg-gray-100 text-left text-lg font-semibold text-gray-700 uppercase tracking-wider">
                Data Stream
              </th>
              <th className="px-6 py-4 border-b-2 border-gray-300 bg-gray-100 text-left text-lg font-semibold text-gray-700 uppercase tracking-wider">
                Comment
              </th>
              <th className="px-6 py-4 border-b-2 border-gray-300 bg-gray-100 text-left text-lg font-semibold text-gray-700 uppercase tracking-wider">
                Indicator
              </th>
            </tr>
          </thead>
          <tbody>
            {results.map(({ dataStream, comment, indicator }, index) => {
              return (
                <tr
                  className={`${
                    indicator == "Positive"
                      ? "hover:bg-green-200"
                      : "hover:bg-red-200"
                  } transition duration-300`}
                  key={index}
                >
                  <td className="px-6 py-6 border-b bg-transparent border-gray-300 bg-white text-lg">
                    {index + 1}
                  </td>
                  <td className="px-6 py-6 border-b bg-transparent border-gray-300 bg-white text-lg">
                    {dataStream}
                  </td>
                  <td className="px-6 py-6 border-b bg-transparent border-gray-300 bg-white text-lg">
                    {comment}
                  </td>
                  <td className="px-6 py-6 border-b bg-transparent border-gray-300 bg-white text-lg">
                    <span
                      className={`relative inline-block px-3 py-1 ${
                        indicator === "Positive"
                          ? "text-green-900"
                          : "text-red-900 "
                      } font-semibold  leading-tight`}
                    >
                      <span
                        aria-hidden
                        className={`absolute inset-0 ${
                          indicator == "Positive"
                            ? "bg-green-300"
                            : "bg-red-300"
                        }  opacity-50 rounded-full`}
                      ></span>
                      <span className="relative">
                        {indicator === "Positive" ? "Positive" : "Negative"}
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
