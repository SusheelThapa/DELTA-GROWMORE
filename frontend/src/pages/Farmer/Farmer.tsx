import FarmCategory from "./FarmCategory";
import FarmFruitVeg from "./FarmFruitVeg";
import FarmHero from "./FarmHero";
import FarmNav from "./FarmNav";

const Farmer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full px-20">
      <FarmNav number="4" />
      <FarmHero />
      <FarmCategory />
      <FarmFruitVeg />
    </div>
  );
};

export default Farmer;
