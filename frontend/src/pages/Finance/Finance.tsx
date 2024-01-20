import FinanceHero from "../../components/Finance/FinanceHero";
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend
} from 'chart.js'
import { Pie } from 'react-chartjs-2';
import { Link } from "react-router-dom";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);
const Finance = () => {
  const sales = {
    labels: ["localMarket", "export", "others", "marketing", "transportation", "otherExpense"],
    datasets: [
      {
        data: [20000, 15000, 20000, 2000, 5000, 2000],
        backgroundColor: ['aqua', 'orange', 'green', 'yellow', 'purple', 'red']
      }
    ]
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <>
      <div className="flex flex-col w-full items-center">
        <div className="header text-green-600 text-5xl font-bold w-full text-center my-10">GrowMore for Everyone</div>
        <div>
          <FinanceHero />
        </div>

        <div className="sales-info w-full bg-gray-50 mt-[5rem] p-8 flex flex-row items-center justify-center gap-28">
          <div className="w-[50%] border-2 shadow-lg bg-white rounded-xl h-[20rem] p-5">
            <div className="heading text-2xl font-bold w-full text-center">Total Revenue</div>
            <hr />
            <div className="text-xl">
              <ul>
                <li><span className="font-bold">Local Market :</span> NRS. {sales.datasets[0].data[0]}</li>
                <li><span className="font-bold">Export :</span> NRS. {sales.datasets[0].data[1]}</li>
                <li><span className="font-bold">Others :</span> NRS. {sales.datasets[0].data[2]}</li>
              </ul>
            </div>
            <hr className="mt-3" />
            <ul className="text-xl mt-3">
              <li><span className="font-bold">Marketing :</span> NRS. {sales.datasets[0].data[3]}</li>
              <li><span className="font-bold">Transportation :</span> NRS. {sales.datasets[0].data[4]}</li>
              <li><span className="font-bold">Others :</span> NRS. {sales.datasets[0].data[5]}</li>
            </ul>
            <hr className="mt-3" />
            <div className="text-xl text-green-800">
              <span className="font-bold ">Total Profit:</span> NRS. {sales.datasets[0].data[0] + sales.datasets[0].data[1] + sales.datasets[0].data[2] - sales.datasets[0].data[3] - sales.datasets[0].data[4] - sales.datasets[0].data[5]}
            </div>
          </div>

          <div className="w-[20%] border-2 shadow-lg bg-white rounded-xl h-[20rem] p-5">
            <div className="heading text-2xl font-bold text-center">Analytics</div>
            <div className="w-full h-full p-3">
              <Pie data={sales} options={options}></Pie>
            </div>
          </div>
        </div>
        <div className="w-full text-center text-green-500 text-5xl font-bold my-16">
          <Link to="/farmer">
            Do you want to connect to our marketplace? Click here...
          </Link>
        </div>
        
      </div>
    </>
  );
};

export default Finance;
