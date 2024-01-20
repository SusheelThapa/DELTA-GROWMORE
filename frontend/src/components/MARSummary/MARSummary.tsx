import {
  FaBusinessTime,
  FaCloudSun,
  FaSeedling,
  FaTemperatureHigh,
  FaTint,
  FaPhabricator,
} from "react-icons/fa";

const MARSummary = () => {
  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center py-10">
        <h2 className="text-6xl font-bold text-gray-800">
          Market Analysis Result
        </h2>
        <p className="text-xl text-gray-500 mt-4">Insights and Overview</p>
      </div>

      {/* Cards Container */}
      <div className="grid md:grid-cols-3 gap-10">
        {/* Current Status Card */}
        <div className="bg-blue-100 shadow rounded-lg p-8 flex flex-col items-center">
          <FaBusinessTime className="text-3xl text-blue-600 mb-6" />
          <h3 className="text-2xl font-bold text-gray-700">Current Status</h3>
          <p className="text-lg text-gray-600">Positive</p>
        </div>

        {/* Market Trend Card */}
        <div className="bg-green-100 shadow rounded-lg p-8 flex flex-col items-center">
          <FaSeedling className="text-3xl text-green-600 mb-6" />
          <h3 className="text-2xl font-bold text-gray-700">Market Trend</h3>
          <p className="text-lg text-gray-600">Negative</p>
        </div>

        {/* Weather Card */}
        <div className="bg-yellow-100 shadow rounded-lg p-8 flex flex-col items-center">
          <FaCloudSun className="text-3xl text-yellow-600 mb-6" />
          <h3 className="text-2xl font-bold text-gray-700">Weather</h3>
          <p className="text-lg text-gray-600">24 degree</p>
        </div>

        {/* Soil Temperature Card */}
        <div className="bg-red-100 shadow rounded-lg p-8 flex flex-col items-center">
          <FaTemperatureHigh className="text-3xl text-red-600 mb-6" />
          <h3 className="text-2xl font-bold text-gray-700">Soil Temperature</h3>
          <p className="text-lg text-gray-600">20 degree</p>
        </div>

        {/* pH Level Card */}
        <div className="bg-purple-100 shadow rounded-lg p-8 flex flex-col items-center">
          <FaPhabricator className="text-3xl text-purple-600 mb-6" />
          <h3 className="text-2xl font-bold text-gray-700">pH Level</h3>
          <p className="text-lg text-gray-600">7.5</p>
        </div>

        {/* Moisture Card */}
        <div className="bg-teal-100 shadow rounded-lg p-8 flex flex-col items-center">
          <FaTint className="text-3xl text-teal-600 mb-6" />
          <h3 className="text-2xl font-bold text-gray-700">Moisture</h3>
          <p className="text-lg text-gray-600">24 %</p>
        </div>
      </div>
    </div>
  );
};

export default MARSummary;
