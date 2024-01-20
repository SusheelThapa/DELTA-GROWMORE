/**
 * @file MarketAnalysisResult.tsx
 * @description Component displaying the results of market analysis.
 * Integrates MARSummary and MARTable components to present detailed insights.
 */

import MARSummary from "../../components/MARSummary";
import MARTable from "../../components/MARTable";

/**
 * @function MarketAnalysisResult
 * @description Component displaying the results of market analysis.
 *
 * @returns {TSX.Element} - The MarketAnalysisResult component.
 */

const MarketAnalysisResult = () => {
    // Sample market analysis results data
  const results = [
    {
      dataStream: "Crop Yield Trends",
      comment: "Steady increase in yields over the past 5 years.",
      indicator: "Positive",
    },
    {
      dataStream: "Local Market Prices",
      comment: "Fluctuating prices with recent downward trend.",
      indicator: "Caution",
    },
    {
      dataStream: "Pesticide Usage Levels",
      comment: "Higher usage noted, raising environmental concerns.",
      indicator: "Negative",
    },
    {
      dataStream: "Water Supply Status",
      comment: "Stable supply, sufficient for current crop needs.",
      indicator: "Positive",
    },
    {
      dataStream: "Export Opportunities",
      comment: "New markets opening in Asia and Europe.",
      indicator: "Positive",
    },
    {
      dataStream: "Technological Advancements in Agriculture",
      comment: "Adoption of precision farming increasing efficiency.",
      indicator: "Positive",
    },
    {
      dataStream: "Labor Market Conditions",
      comment: "Shortage of skilled labor in rural areas.",
      indicator: "Negative",
    },
    {
      dataStream: "Crop Disease Incidence",
      comment: "Low incidence due to improved crop management.",
      indicator: "Positive",
    },
    {
      dataStream: "Fertilizer Availability",
      comment: "Supply disruptions noted due to geopolitical issues.",
      indicator: "Negative",
    },
    {
      dataStream: "Consumer Preferences Shifts",
      comment: "Growing demand for organic produce.",
      indicator: "Positive",
    },
    {
      dataStream: "Regulatory Changes Impact",
      comment: "New regulations may increase operational costs.",
      indicator: "Caution",
    },
    {
      dataStream: "Energy Costs for Farming",
      comment: "Rising energy prices affecting profit margins.",
      indicator: "Negative",
    },
    {
      dataStream: "Supply Chain Efficiency",
      comment: "Improvements noted with adoption of new technologies.",
      indicator: "Positive",
    },
    {
      dataStream: "Land Availability and Usage",
      comment: "Decreasing arable land due to urbanization.",
      indicator: "Negative",
    },
    {
      dataStream: "Climate Change Effects on Agriculture",
      comment: "Increasing unpredictability in weather patterns.",
      indicator: "Caution",
    },
  ];

  return (
    <div className="w-full mx-40 flex flex-col justify-center items-center">
      <MARSummary />
      <MARTable results={results} />
    </div>
  );
};
// Exporting the MarketAnalysisResult component as the default export
export default MarketAnalysisResult;
