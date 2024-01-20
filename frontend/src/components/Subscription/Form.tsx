import { useState } from "react";
import axios from "axios";

import khaltiLogo from "../images/khalti.svg";

const Form = () => {
  const [amount, setAmount] = useState("70000");
  const [returnUrl, setReturnUrl] = useState("http://localhost:5173/dashboard");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      amount: amount,
      return_url: returnUrl,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/khalti/",
        formData
      );

      const jsonData = JSON.parse(data);

      window.location.replace(jsonData.payment_url);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="app-container flex justify-center items-center h-lvh flex-col">
      <div>
        <img src={khaltiLogo} alt="Logo of khalti" className="w-5/6 h-5/6" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-md mx-auto p-6 bg-white shadow-2xl rounded-md"
      >
        <label
          htmlFor="amount"
          className="text-sm font-semibold text-gray-700 mb-2"
        >
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={amount}
          disabled
          onChange={(e) => setAmount(e.target.value)}
          className="border border-gray-300 rounded-md p-2 mb-4"
          required
        />

        <input type="hidden" name="return_url" value={returnUrl} />

        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 rounded-md transition duration-300 hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
