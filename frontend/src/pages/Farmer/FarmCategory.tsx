/**
 * @file FarmCategory.tsx
 * @description Component for displaying farm categories and their respective items.
 *
 * @module FarmCategory
 */
import FarmCategoryCard from "./FarmCategoryCard";

// Data for farm categories
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
    img: "https://media.istockphoto.com/id/544807136/photo/various-fresh-dairy-products.jpg?s=612x612&w=0&k=20&c=U5T70bi24itoTDive1CVonJbJ97ChyL2Pz1I2kOoSRo=",
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    count: "1 loaf",
    img: "https://media.istockphoto.com/id/171553200/photo/wheat-berries-background.jpg?s=612x612&w=0&k=20&c=907B7IcP8MieoXvLzLILSqy05gTjehDBcSb-R2Wzmj4=",
  },
  {
    id: 4,
    name: "Free-range Eggs",
    count: "12 eggs",
    img: "https://media.istockphoto.com/id/968001080/photo/free-range-eggs-in-a-nest.jpg?s=612x612&w=0&k=20&c=qr68Qp4B2Cg2eWuEmA39pECLyBF0gu8-umGLESAcNVE=",
  },
  {
    id: 5,
    name: "Fresh Fish",
    count: "500g",
    img: "https://media.istockphoto.com/id/916591460/photo/fresh-fish-and-seafood-arrangement-on-black-stone.jpg?s=612x612&w=0&k=20&c=POERCCnMCU9mdyKjNNtaQ85Zb7jTnQTjSCrpVpsy3tw=",
  },
  {
    id: 6,
    name: "Assorted Nuts",
    count: "200g",
    img: "https://media.istockphoto.com/id/1325008249/video/ld-a-mix-of-dried-berries-and-nuts-falling-on-the-table.jpg?s=640x640&k=20&c=d8V2FbZW2vqs5UuvdTwpY3FGeT_1azrjQFe7eXDbuoM=",
  },
  {
    id: 7,
    name: "Greek Yogurt",
    count: "500g",
    img: "https://media.istockphoto.com/id/927134424/photo/plain-yogurt-is-super-healthy.jpg?s=612x612&w=0&k=20&c=ijce-CSJZfS6FmfwRbdOUTgd9AtX5O9015TP-GmOjqs=",
  },
];
/**
 * @function FarmCategory
 * @description Component for displaying farm categories and their respective items.
 *
 * @returns {TSX.Element} - The FarmCategory component.
 */
const FarmCategory = () => {
  return (
    <div className="container pt-16 w-full">
      <div className="container pt-16 w-full">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
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
    </div>
  );
};

export default FarmCategory;
