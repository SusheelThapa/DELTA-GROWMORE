import Average from "../../components/CropMonitor/Average";
import DailyIrrigation from "../../components/CropMonitor/DailyIrrigation";
import SoilMoistureHistoryData from "../../components/CropMonitor/SoilMoistureHistoryData";
import SoilTemperatureHistory from "../../components/CropMonitor/SoilTemperatureHistory";

const CropMonitor = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="bg-gray-200 w-full h-full flex flex-row justify-between p-3">
          <div className="w-[49%] flex flex-col gap-5">
            <Average />
            <DailyIrrigation />
          </div>
          <div className="bg-white w-[49%] rounded-lg">
            <div>
              Maps here
            </div>
          </div>
        </div>
        <div className="flex flex-row bg-gray-200 h-full p-5 gap-5">
          <div className="w-[49%] h-[25rem] ">
              <SoilTemperatureHistory/>
          </div>
          <div className="w-[49%] h-[25rem]">
            <SoilMoistureHistoryData/>
          </div>
        </div>

      </div>
    </>
  );
};

export default CropMonitor;
