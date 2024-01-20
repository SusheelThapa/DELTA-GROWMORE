/**
 * @file FarmFeature.tsx
 * @description Component for displaying featured farm products and categories.
 *
 * @module FarmFeature
 */
/**
 * @function FarmFeature
 * @description Component for displaying featured farm products and categories.
 *
 * @returns {TSX.Element} - The FarmFeature component.
 */
const FarmFeature = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Fruits and Vegetables</h3>
          <p className="text-gray-600 mt-2">
            Buy farm fruits and Vegetables online at best prices!
          </p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn text-green-500 px-4 py-1 rounded-full">Fruits</button>
          <button className="text-gray-600 hover:text-green-200 feature_btn px-4 py-1 rounded-full">
            Vegetables
          </button>
          <button className="text-gray-600 hover:text-green-200 feature_btn px-4 py-1 rounded-full">
            Bread & Bakery
          </button>
        </div>
      </div>
    </div>
  );
};

export default FarmFeature;
