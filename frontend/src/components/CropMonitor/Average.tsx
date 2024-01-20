import { FaTemperatureFull } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import { BsMoisture } from "react-icons/bs";
import { RiPlantFill } from "react-icons/ri";

/**
 * A component that displays average environmental conditions.
 * Each condition (like temperature, humidity, etc.) is displayed
 * along with an icon in a grid format.
 *
 * @returns {TSX.Element} The Average component.
 */
const Average = () => {
  return (
    <div className="averages bg-white rounded-xl p-3">
      <div className="text-2xl w-full text-center">Averages</div>
      <hr />
      <div className="box grid grid-cols-3 gap-4 p-6">
        {/* Temperature */}
        <div className="temp border-2 shadow-md rounded-lg flex flex-row h-[3.5rem]">
          <div className="w-[20%] flex justify-center items-center bg-green-50">
            <FaTemperatureFull className="text-3xl" />
          </div>
          <div className="flex flex-col ml-3">
            <div className="">Temperature</div>
            <div className="text-xl font-bold">24 degree</div>
          </div>
        </div>

        {/* Humidity */}
        <div className="temp border-2 shadow-md rounded-lg flex flex-row h-[3.5rem]">
          <div className="w-[20%] flex justify-center items-center bg-green-50">
            <WiHumidity className="text-3xl" />
          </div>
          <div className="flex flex-col ml-3">
            <div className="">Humidity</div>
            <div className="text-xl font-bold">30 %</div>
          </div>
        </div>

        {/*Air Quality */}
        <div className="temp border-2 shadow-md rounded-lg flex flex-row h-[3.5rem]">
          <div className="w-[20%] flex justify-center items-center bg-green-50">
            <FiWind className="text-3xl" />
          </div>
          <div className="flex flex-col ml-3">
            <div className="">Air Quality</div>
            <div className="text-xl font-bold">85%</div>
          </div>
        </div>

        {/* Soil Temperature */}
        <div className="temp border-2 shadow-md rounded-lg flex flex-row h-[3.5rem]">
          <div className="w-[20%] flex justify-center items-center bg-green-50">
            <FaTemperatureFull className="text-3xl" />
          </div>
          <div className="flex flex-col ml-3">
            <div className="">Soil Temperature</div>
            <div className="text-xl font-bold">20 degree</div>
          </div>
        </div>

        {/* Soil Moisture */}
        <div className="temp border-2 shadow-md rounded-lg flex flex-row h-[3.5rem]">
          <div className="w-[20%] flex justify-center items-center bg-green-50">
            <BsMoisture className="text-3xl" />
          </div>
          <div className="flex flex-col ml-3">
            <div className="">Soil Moisture</div>
            <div className="text-xl font-bold">24 %</div>
          </div>
        </div>

        {/* Land Fertility */}
        <div className="temp border-2 shadow-md rounded-lg flex flex-row h-[3.5rem]">
          <div className="w-[20%] flex justify-center items-center bg-green-50">
            <RiPlantFill className="text-3xl" />
          </div>
          <div className="flex flex-col ml-3">
            <div className="">Land Fertility</div>
            <div className="text-xl font-bold">20 %</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Average;
