import React, { useState } from "react";

import apiClient from "../../services/apiClient";

/**
 * Component for predicting plant diseases based on an image upload.
 * Allows users to upload an image of a plant and sends it to the backend to diagnose potential diseases.
 * Displays the prediction result including disease name, confidence level, and recommendations.
 */
const PredictPlantDisease = () => {
  const [imagePreview, setImagePreview] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  /**
   * Handles the change event of the file input.
   * Sets the image preview once a file is selected.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event from the file input.
   */
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  /**
   * Sends the selected image to the backend for disease prediction.
   * Extracts and displays the result from the backend response.
   */
  const sendImageToBackend = async () => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    if (!fileInput.files?.length) {
      alert("Please upload an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", fileInput.files[0]);

    try {
      const response = await apiClient.post("/api/predict/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Assuming the response is in the format mentioned
      const { class: disease, confidence, res: description } = response.data;
      const resultText = `Disease: ${disease}\nConfidence: ${(
        confidence * 100
      ).toFixed(2)}%\nRecommendations: ${description}`;
      setOutput(resultText);
    } catch (error) {
      console.error("Error sending image:", error);
      alert("Error sending image");
    }
  };
  return (
    <div className="container mx-auto p-4">
      <div className="prediction bg-gray-200 rounded-lg shadow-lg overflow-hidden">
        <div className="header bg-green-600 text-white text-3xl font-bold p-4">
          Predict Plant Disease
        </div>
        <div className="content p-4">
          <p className="text-gray-700 text-lg mb-4">
            Upload an image of a plant to diagnose potential diseases and get
            recommendations for treatment.
          </p>
          <div className="upload-area border-dashed border-4 border-gray-300 rounded-lg p-4 text-center">
            <label
              htmlFor="fileInput"
              className="cursor-pointer bg-green-500 text-white py-2 px-4 rounded-md inline-block"
            >
              Click to Upload Image
            </label>
            <input
              type="file"
              id="fileInput"
              className="hidden"
              onChange={handleImageUpload}
            />
            <div id="imagePreview" className="mt-4">
              {imagePreview && (
                <img
                  src={imagePreview}
                  className="max-w-xs max-h-64 mx-auto"
                  alt="Plant Preview"
                />
              )}
            </div>
          </div>
          <button
            id="sendButton"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={sendImageToBackend}
          >
            Send Image
          </button>

          <div className="results mt-4 p-2 bg-white rounded-lg">
            <span className="font-bold">Output:</span>
            <pre className="text-gray-800 text-lg mt-2 whitespace-pre-wrap">
              {output}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictPlantDisease;
