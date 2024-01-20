import { BsArrowRight } from "react-icons/bs";

const FarmHero = () => {
  return (
    <>
      <div className="pt-4">
        <div className="grid xl:grid-cols-4 xl-grid-row-2 gap-4 ">
          <div className="relative xl:col-span-2 xl:row-start-1 xl:row-end-[-1]">
            <img
              src="https://github.com/thebravecoders/Assets__Creating-a-Responsive-eCommerce-Website-with-React-and-Tailwind-CSS-Hindi-Tutorial/raw/main/hero__1.webp"
              alt="hero image"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
              <p className="text-2xl hidden sm:block">
                100% ORIGINAL DRY FRUITS!
              </p>
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold">
                Dried Fruits Best Quality
              </h2>
              <p className="text-gray-500 text-xl pt-4 sm:pt-8">
                Starting At just
              </p>
              <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 pb-4">
                Nrs. 500
              </div>
              <div className="bg-green-900 hover:bg-green-700 text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
                Shop now <BsArrowRight />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="relative col-span-2 h-[50%]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi-48B8Z6ICZ1iGPAa8e9HEGn1C0d9vF4XEQ&usqp=CAU"
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%]">
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Best Yummy Tomatoes!
                </h2>
                <p className="text-gray-500 text-xl pt-4">Starting At</p>
                <div className="font-bold text-gray-600 text-2xl sm:text-4xl pb-8">
                  Nrs. 210
                </div>
                <div className="bg-green-900 hover:bg-green-700 text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
                  Shop now <BsArrowRight />
                </div>
              </div>
            </div>
            <div className="relative col-span-2 h-[50%] w-full">
              <img
                src="https://www.hsph.harvard.edu/nutritionsource/wp-content/uploads/sites/30/2014/01/potatoes-411975_1280.jpg"
                alt=""
                className="w-full h-full object-cover rounded-lg "
              />
              <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%]">
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Best Yummy Potatoes!
                </h2>
                <p className="text-gray-500 text-xl pt-4">Starting At</p>
                <div className="font-bold text-gray-600 text-2xl sm:text-4xl pb-8">
                  Nrs. 210
                </div>
                <div className="bg-green-900 hover:bg-green-700 text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer">
                  Shop now <BsArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FarmHero;
