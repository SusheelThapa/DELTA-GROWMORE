import FarmCategory from "./FarmCategory";
import FarmHero from "./FarmHero";
import FarmNav from "./FarmNav";

const Farmer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <FarmNav number="4" />
      <FarmHero />
      <FarmCategory />
    </div>
  );
};

export default Farmer;
