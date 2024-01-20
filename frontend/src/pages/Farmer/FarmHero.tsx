/**
 * @function FarmHero
 * @description Component representing the hero section of the farm products page.
 * It includes a prominent image, a headline, and a call-to-action for shopping dried fruits.
 *
 * @returns {TSX.Element} - The FarmHero component.
 */
import { BsArrowRight } from "react-icons/bs";
/**
 * @function FarmHero
 * @description Component rendering the hero section with a call-to-action for dried fruits.
 *
 * @returns {TSX.Element} - The FarmHero component.
 */
const FarmHero = () => {
  return (
    <div className="flex items-center justify-center w-full pt-4">
      <div className="relative h-[500px] w-full grid">
        <img
          src="https://github.com/thebravecoders/Assets__Creating-a-Responsive-eCommerce-Website-with-React-and-Tailwind-CSS-Hindi-Tutorial/raw/main/hero__1.webp"
          alt="hero image"
          className="w-full h-[500px] object-cover rounded-lg"
        />
        <div className="absolute max-w-[470px] left-8 sm:left-16 top-1/2 -translate-y-1/2 space-y-4">
          <p className="text-2xl hidden sm:block">100% ORIGINAL DRY FRUITS!</p>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
            Dried Fruits Best Quality
          </h2>
          <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At just</p>
          <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4">
            Nrs. 500
          </div>
          <div className="bg-green-600 hover:bg-green-800 text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[18px] sm:px-6 sm:py-3 cursor-pointer">
            Shop now <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmHero;
