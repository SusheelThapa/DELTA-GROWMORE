import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

const items = [
  {
    id: 1,
    name: "Eggs",
    image:
      "https://media.istockphoto.com/id/1141120666/photo/healhy-breakfast-toast-with-avocado-egg.jpg?s=612x612&w=0&k=20&c=WSr6b-oo9Qd-npEfozFi_PS9DtA8yyKL5Unp0bY4O-I=",
    price: "$2.99/dozen",
    rating: 5,
  },
  {
    id: 2,
    name: "Oatmeal",
    image:
      "https://media.istockphoto.com/id/1249206154/photo/woman-making-healthy-breakfast-in-kitchen.jpg?s=612x612&w=0&k=20&c=oHTgRoeT4pXqPMcnH8XBFvPTn8t7Tp2A_ZEWhNS0d-I=",
    price: "$3.50/pkg",
    rating: 4,
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    image:
      "https://media.istockphoto.com/id/1713366490/photo/fresh-sliced-homemade-wholegrain-wheat-bread-on-white-rustic-background-artisan-sourdough.jpg?s=612x612&w=0&k=20&c=NS2uuRdqUR6jU0cvI2C60zSRI73mWWgo1PmFC3G2KyE=",
    price: "$2.99/loaf",
    rating: 5,
  },
  {
    id: 4,
    name: "Greek Yogurt",
    image:
      "https://media.istockphoto.com/id/1198407226/photo/ham-tomatoes-and-lettuce-sandwich.jpg?s=612x612&w=0&k=20&c=GZM5rWN7hkVfFrYsdjyICSRyitb1pnMBASxjxRAWHb8=",
    price: "$4.99/pkg",
    rating: 4,
  },
  {
    id: 5,
    name: "Granola",
    image:
      "https://media.istockphoto.com/id/515437512/photo/bowl-of-granola-with-yogurt-and-berries.jpg?s=612x612&w=0&k=20&c=IFUMg2wnhBhHP_OTDZwyB6jXJSt6gaqbFChOPh0dU0w=",
    price: "$5.50/pkg",
    rating: 4,
  },
  {
    id: 6,
    name: "Milk",
    image:
      "https://media.istockphoto.com/id/1194152250/photo/vegan-banana-and-oatmeal-smoothie-in-glass-jar-on-the-light-background.jpg?s=612x612&w=0&k=20&c=np9DgHLFcUJwY5hzLd3aSLzebaYDzPzerkEGbuGy0tY=",
    price: "$3.99/gallon",
    rating: 5,
  },
  {
    id: 7,
    name: "Cheese",
    image:
      "https://media.istockphoto.com/id/184114697/photo/bacon-and-egg-breakfast-sandwich.jpg?s=612x612&w=0&k=20&c=a3os-l6YCHjrOemiq5ocaj3dT1niU4TPCHfFee8U5ng=",
    price: "$6.99/lb",
    rating: 4,
  },
  {
    id: 8,
    name: "Mixed Nuts",
    image:
      "https://media.istockphoto.com/id/1192321004/photo/trail-mix-nuts.jpg?s=612x612&w=0&k=20&c=1Tn_JoMzz7u1YvOR6mQ3Ga-ZoZ5h29lNniuUUfXlAjo=",
    price: "$7.99/lb",
    rating: 5,
  },
];

const FarmBreakFastDaiy = () => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<BsStarFill key={i} className="text-yellow-500 mr-1" />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        stars.push(<BsStarHalf key={i} className="text-yellow-500" />);
      } else {
        stars.push(<BsStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  return (
    <div className="my-20 w-full ">
      <h1 className="text-4xl font-bold text-left mb-8">Breakfast and Dairy</h1>
      <p className="text-left text-gray-700 text-xl mb-12">
        Buy best quality breakfast online
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 mx-3 hover:bg-gray-50"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  {renderStars(item.rating)}
                </div>
                <button className="text-green-500 hover:text-green-700">
                  <FaShoppingCart size={24} />
                </button>
              </div>
              <h2 className="text-2xl font-bold mb-1">{item.name}</h2>
              <p className="text-xl">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmBreakFastDaiy;
