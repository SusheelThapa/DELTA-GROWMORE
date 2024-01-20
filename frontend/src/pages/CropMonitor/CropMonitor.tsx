import Average from "../../components/CropMonitor/Average";
import DailyIrrigation from "../../components/CropMonitor/DailyIrrigation";
import SoilMoistureHistoryData from "../../components/CropMonitor/SoilMoistureHistoryData";
import SoilTemperatureHistory from "../../components/CropMonitor/SoilTemperatureHistory";

const CropMonitor = () => {

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="bg-gray-200 w-full h-[80%] flex flex-row justify-between p-3">
          <div className="w-[49%] flex flex-col gap-6">
            <Average />
            <DailyIrrigation />
          </div>
          <div className="bg-white w-[49%] rounded-lg flex justify-center items-center flex-col">
            <div className="text-3xl text-center font-bold">
              Field Map
            </div>
            <hr />
            <div className="h-[80%] w-[80%] mt-2">
              <iframe
                title="Google Map"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.0670783373876!2d87.91828892028468!3d26.91301514163521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5c39a2f2e1d5b%3A0xef751e9940f63c22!2z4KSa4KS_4KSv4KS-IOCkrOCkvuCksOClgA!5e0!3m2!1sen!2snp!4v1705744568557!5m2!1sen!2snp"
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="flex flex-row bg-gray-200 h-full p-5 gap-5">
          <div className="w-[49%] h-[25rem] ">
            <SoilTemperatureHistory />
          </div>
          <div className="w-[49%] h-[25rem]">
            <SoilMoistureHistoryData />
          </div>
        </div>

        <div className="prediction w-full bg-gray-200 h-[50rem] flex justify-center mt-[-15rem]">
          <div className="predictCard w-[97%] bg-white rounded-lg mb-[5rem]">
            <div className="upload h-[3rem] w-full">
              <div className="header  m-8 flex flex-row justify-between">
                <div className="text-3xl font-bold">Predict Disease</div>
                <div className="upload">

                  <label
                    htmlFor="fileInput"
                    className="cursor-pointer bg-green-500 text-white py-2 px-4 rounded-md"
                  >
                    Click to upload a file
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                  />

                </div>
              </div>
              <hr />
            </div>
            <div className="predictedOutput mx-[2rem] my-5 w-full text-lg">
              <span className="font-bold">Output:</span>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default CropMonitor;
