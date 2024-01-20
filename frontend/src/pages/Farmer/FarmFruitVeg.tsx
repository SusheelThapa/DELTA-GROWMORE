import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

const FarmFruitVeg = () => {
  const items = [
    {
      id: 1,
      name: "Apple",
      image:
        "https://media.istockphoto.com/id/1340549637/photo/ripe-red-apple-close-up-with-apple-orchard-in-background.jpg?s=612x612&w=0&k=20&c=HJEWvBpUFUjdh-HWJ0Wk2Ar7XyIpHxsn3WxcbhFvThM=",
      price: "$1.99/lb",
      rating: 4,
    },
    {
      id: 2,
      name: "Carrot",
      image:
        "https://media.istockphoto.com/id/1388403435/photo/fresh-carrots-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=XmrTb_nASc7d-4zVKUz0leeTT4fibDzWi_GpIun0Tlc=",
      price: "$0.99/lb",
      rating: 3.5,
    },
    {
      id: 3,
      name: "Banana",
      image:
        "https://media.istockphoto.com/id/509533014/photo/raw-organic-bunch-of-bananas.jpg?s=612x612&w=0&k=20&c=eZg53yOtUf-H2vXQovAyAP2FbhWIgfO0KLEX_nYoXxQ=",
      price: "$0.59/lb",
      rating: 4.5,
    },
    {
      id: 4,
      name: "Broccoli",
      image:
        "https://media.istockphoto.com/id/518951178/photo/fresh-raw-green-broccoli-in-bowl.jpg?s=612x612&w=0&k=20&c=wP_y_qqs6_hFVsnkE4MCHLNOOdQ11sg5MBuOjg2AygA=",
      price: "$2.50/lb",
      rating: 4,
    },
    {
      id: 5,
      name: "Strawberry",
      image:
        "https://media.istockphoto.com/id/477834644/photo/fresh-strawberries-background.jpg?s=612x612&w=0&k=20&c=JwLE9J3zbe9A3zdPmt2oF62moYytxeKTMBY-QCruMas=",
      price: "$4.00/lb",
      rating: 4.5,
    },
    {
      id: 6,
      name: "Tomato",
      image:
        "https://media.istockphoto.com/id/1307966586/video/ripe-red-tomatoes-on-bush-swaying-in-the-wind-red-ripe-organic-tomatoes-on-the-branch-organic.jpg?s=640x640&k=20&c=XeHaD42mXL7pCnaIgGwhHLmei4AdkKutvdiXSeJ-zvg=",
      price: "$1.20/lb",
      rating: 4,
    },
    {
      id: 7,
      name: "Lettuce",
      image:
        "https://media.istockphoto.com/id/467440403/photo/woman-picking-fresh-vegetables-from-garden.jpg?s=612x612&w=0&k=20&c=eArI4BLWjRVBqfbCMKSLfAExuLqc-MGbllfwdmN_3So=",
      price: "$1.50/head",
      rating: 3.5,
    },
    {
      id: 8,
      name: "Mango",
      image:
        "https://media.istockphoto.com/id/1160199541/photo/sliced-mangos-in-a-wooden-plate-on-a-table-in-rustic-kitchen.jpg?s=612x612&w=0&k=20&c=6BWlfTRr-L5URnjlbZX6kKQdz6NDDtnpuuvNps4dgio=",
      price: "$2.00/each",
      rating: 4.5,
    },
    {
      id: 9,
      name: "Cucumber",
      image:
        "https://media.istockphoto.com/id/492532141/photo/fresh-cucumber-on-the-wooden-table.jpg?s=612x612&w=0&k=20&c=cM2n_EqaUQS8ciL39mek3kPVt-qxBi-_OJpNx3XoKac=",
      price: "$0.99/lb",
      rating: 4,
    },
    {
      id: 10,
      name: "Blueberries",
      image:
        "https://media.istockphoto.com/id/176888787/photo/blueberry.jpg?s=612x612&w=0&k=20&c=ltp0zuFl1CBbvpKWptRfEaHa7G8RMsKjNfHt70QBI4E=",
      price: "$3.99/pint",
      rating: 4,
    },
    {
      id: 11,
      name: "Pepper",
      image:
        "https://media.istockphoto.com/id/480931380/photo/bell-pepper.jpg?s=612x612&w=0&k=20&c=gzxuvBrlcGd9shtDT2rMyPoCQj9VzLv1SksaRSuNDCk=",
      price: "$2.99/lb",
      rating: 4.5,
    },
    {
      id: 12,
      name: "Avocado",
      image:
        "https://media.istockphoto.com/id/1143742213/photo/fresh-organic-avocado-on-the-wooden-table.jpg?s=612x612&w=0&k=20&c=4hmj3XPrvcLje2mE1xz_gKhHZKliRLXVsGKWNqIDTmY=",
      price: "$1.50/each",
      rating: 4.5,
    },
    {
      id: 13,
      name: "Eggplant",
      image:
        "https://media.istockphoto.com/id/512525678/photo/sliced-eggplant-on-cutting-board.jpg?s=612x612&w=0&k=20&c=qJZSw0Qo67AXQ_EVq119aoFWwP4L_NegYiJskasafZk=",
      price: "$2.00/lb",
      rating: 4,
    },
    {
      id: 14,
      name: "Peach",
      image:
        "https://media.istockphoto.com/id/487108266/photo/ripe-sweet-peach-fruits-growing-on-a-peach-tree-branch.jpg?s=612x612&w=0&k=20&c=Tzh4NUIds6HGHn6XozGEuxvt929XU9QlHjHPqi7VE1A=",
      price: "$2.50/lb",
      rating: 4.5,
    },
    {
      id: 15,
      name: "Spinach",
      image:
        "https://media.istockphoto.com/id/1296503103/photo/washing-fresh-spinach-leaves-of-close-up-view.jpg?s=612x612&w=0&k=20&c=8WVfEXJDddIJrsZzYRCY791HM7PCIOLjYLLsoBLRs3g=",
      price: "$1.99/bunch",
      rating: 4,
    },
  ];

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
    <div className="mt-10 w-full">
      <h1 className="text-4xl font-bold text-left mb-8">
        Fruits and Vegetables
      </h1>
      <p className="text-left text-xl mb-12">Fresh and Organic Choices</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 mx-3"
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

export default FarmFruitVeg;
