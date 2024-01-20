import React, { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import {
  PiNumberCircleOneFill,
  PiNumberCircleTwoFill,
  PiNumberCircleThreeFill,
} from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const MarketAnalysis = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    location: "",
    mainMarket: "",
    mainCrop: "",
    lastYearYield: "",
    lastYearWaste: "",
  });
  const navigate = useNavigate();

  const handleStart = () => setStep(2);

  const handleInputChange = (e: React.ChangeEvent) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const handleAnalyze = () => {
    console.log("Analyzing:", formData);
    // Add analysis logic here
    navigate("/market-analysis/result");
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  };

  const StepIndicator = ({ num }: { num: number }) => {
    let Icon;
    switch (num) {
      case 1:
        Icon = PiNumberCircleOneFill;
        break;
      case 2:
        Icon = PiNumberCircleTwoFill;
        break;
      case 3:
        Icon = PiNumberCircleThreeFill;
        break;
      default:
        Icon = FaRegCircle;
    }

    return (
      <div
        className={`flex items-center justify-center  flex-col mx-2  p-2 rounded-full`}
      >
        <Icon className={`${step >= num ? "text-green-400" : ""} text-8xl`} />
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-100">
      <div className="bg-white p-6  w-full max-w-3xl h-[800px] overflow-auto bg-inherit rounded-xl">
        <div className="flex justify-center mb-6">
          {[1, 2, 3].map((number) => (
            <StepIndicator key={number} num={number} />
          ))}
        </div>

        {step === 1 && (
          <>
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">
                Welcome to Market Analysis
              </h2>
              <div className="text-center px-32 text-xl mt-20 text-green-700">
              Our market analysis focuses on the Main Market, detailing its location, primary crop, last year's yield, and waste statistics. Leveraging our website analytics, we gain valuable insights into market trends, helping stakeholders make informed decisions.
            </div>
              <button
                onClick={handleStart}
                className="bg-green-500 text-white px-4 py-2 rounded mt-14 w-[10rem] text-xl"
              >
                Start
              </button>
            </div>

          </>
        )}

        {step === 2 && (
          <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto rounded-2xl shadow-2xl bg-white p-6 "
          >
            <h2 className="text-4xl font-bold mb-6 text-center text-gray-700">
              Market Analysis Details
            </h2>

            {/* Location Field */}
            <div className="mb-4">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="mt-1 block w-full bg-gray-100 px-3 py-2  border border-gray-300 rounded-md text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                required
              />
            </div>

            {/* Main Market */}
            <div className="mb-4">
              <label
                htmlFor="mainMarket"
                className="block text-sm font-medium text-gray-700"
              >
                Main Market
              </label>
              <input
                type="text"
                id="mainMarket"
                name="mainMarket"
                value={formData.mainMarket}
                onChange={handleInputChange}
                className="mt-1 block w-full bg-gray-100 px-3 py-2  border border-gray-300 rounded-md text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                required
              />
            </div>

            {/* Main Crop */}
            <div className="mb-4">
              <label
                htmlFor="mainCrop"
                className="block text-sm font-medium text-gray-700"
              >
                Main Crop
              </label>
              <input
                type="text"
                id="mainCrop"
                name="mainCrop"
                value={formData.mainCrop}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                required
              />
            </div>

            {/* Last Year Yield */}
            <div className="mb-4">
              <label
                htmlFor="lastYearYield"
                className="block text-sm font-medium text-gray-700"
              >
                Last Year Yield
              </label>
              <input
                type="text"
                id="lastYearYield"
                name="lastYearYield"
                value={formData.lastYearYield}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                required
              />
            </div>

            {/* Last Year Waste */}
            <div className="mb-4">
              <label
                htmlFor="lastYearWaste"
                className="block text-sm font-medium text-gray-700"
              >
                Last Year Waste
              </label>
              <input
                type="text"
                id="lastYearWaste"
                name="lastYearWaste"
                value={formData.lastYearWaste}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                required
              />
            </div>

            {/* Add more fields as needed */}

            <div className="flex items-center justify-between mt-6">
              <button
                onClick={handleBack}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Back
              </button>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Next
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="max-w-lg mx-auto rounded-2xl shadow-2xl bg-white p-6 ">
            <h2 className="text-xl font-bold mb-6 text-center text-gray-700">
              Confirm Your Data
            </h2>

            {/* Data Display */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <p className="mt-1 text-sm text-gray-600">{formData.location}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Main Market
              </label>
              <p className="mt-1 text-sm text-gray-600">
                {formData.mainMarket}
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Main Crop
              </label>
              <p className="mt-1 text-sm text-gray-600">{formData.mainCrop}</p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Last Year Yield
              </label>
              <p className="mt-1 text-sm text-gray-600">
                {formData.lastYearYield}
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Last Year Waste
              </label>
              <p className="mt-1 text-sm text-gray-600">
                {formData.lastYearWaste}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={handleBack}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Back
              </button>
              <button
                onClick={handleAnalyze}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Confirm and Analyze
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketAnalysis;
