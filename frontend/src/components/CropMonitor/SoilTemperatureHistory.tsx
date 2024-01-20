import { FiCalendar } from "react-icons/fi";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
);

const SoilTemperatureHistory = () => {
    const soilTemprHistoryData = {
        labels: ["Jan 14", "Jan 15", "Jan 16", "Jan 17", "Jan 18", "Jan 19", "Jan 20"],
        datasets: [{
            data: [6, 7, 8, 9, 10, 11, 9],
            backgroundColor: "transparent",
            borderColor: '#f26c6d',
            pointBorderColor: 'transparent',
            pointBorderWidth: 4
        }]
    };

    const options = {
        plugins: {
          legend: {
            display: false,
          },
        },
      };

    return (
        <div className="w-full h-full bg-white rounded-lg px-10 py-3">
            <div className="header flex justify-between m-3">
                <div className="heading font-bold text-2xl">
                    Temperature History
                </div>
                <div className="icon flex flex-row justify-center items-center">
                    <FiCalendar className="text-4xl" />
                    <span className="text-xl text-gray-600">&nbsp; Past 7 days</span>
                </div>
            </div>
            <hr />
            <div className="w-full h-[20rem]">
                <Line data={soilTemprHistoryData} options={options} />
            </div>
        </div>
    );
};

export default SoilTemperatureHistory;
