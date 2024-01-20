/**
 * @file Farmer.tsx
 * @description Component for the farmer section of the application, displaying various farm-related content.
 *
 * @module Farmer
 */

import FarmBreakFastDairy from "./FarmBreakFastDairy";
import FarmCategory from "./FarmCategory";
import FarmFruitVeg from "./FarmFruitVeg";
import FarmHero from "./FarmHero";
import FarmNav from "./FarmNav";

/**
 * @function Farmer
 * @description Component for the farmer section of the application, displaying various farm-related content.
 *
 * @returns {TSX.Element} - The Farmer component.
 */
const Farmer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full px-20">
      <FarmNav number="4" />
      <FarmHero />
      <FarmCategory />
      <FarmFruitVeg />
      <FarmBreakFastDairy />
    </div>
  );
};

export default Farmer;
