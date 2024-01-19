import FarmCategoryCard from "./FarmCategoryCard";

const data = [
  {
    id: 0,
    name: "Fresh Fruits",
    count: "9 piece",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrIcp3LamkbpDZn9AVOXzCDRjQlJP3rCL0yoeLbRHxWA&s",
  },
  {
    id: 1,
    name: "Fresh Vegetables",
    count: "7 items",
    img: "https://5.imimg.com/data5/PH/XD/VP/SELLER-12791548/fresh-vegetables.jpg",
  },
  {
    id: 2,
    name: "Organic Milk",
    count: "1 liter",
    img: "https://5.imimg.com/data5/PH/XD/VP/SELLER-12791548/fresh-vegetables.jpg",
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    count: "1 loaf",
    img: "https://5.imimg.com/data5/PH/XD/VP/SELLER-12791548/fresh-vegetables.jpg",
  },
  {
    id: 4,
    name: "Free-range Eggs",
    count: "12 eggs",
    img: "https://5.imimg.com/data5/PH/XD/VP/SELLER-12791548/fresh-vegetables.jpg",
  },
  {
    id: 5,
    name: "Fresh Fish",
    count: "500g",
    img: "https://5.imimg.com/data5/PH/XD/VP/SELLER-12791548/fresh-vegetables.jpg",
  },
  {
    id: 6,
    name: "Assorted Nuts",
    count: "200g",
    img: "https://5.imimg.com/data5/PH/XD/VP/SELLER-12791548/fresh-vegetables.jpg",
  },
  {
    id: 7,
    name: "Greek Yogurt",
    count: "500g",
    img: "https://5.imimg.com/data5/PH/XD/VP/SELLER-12791548/fresh-vegetables.jpg",
  },
];

const FarmCategory = () => {
  return (
    <div className="container pt-16 w-screen">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((e) => (
          <FarmCategoryCard
            key={e.id}
            img={e.img}
            name={e.name}
            count={e.count}
          />
        ))}
      </div>
    </div>
  );
};

export default FarmCategory;
