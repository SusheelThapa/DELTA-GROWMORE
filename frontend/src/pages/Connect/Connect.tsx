import ConnectCard from "../../components/Connect/ConnectCard";

const Connect = () => {
  const data = [{
    img: "https://www.shutterstock.com/image-vector/farm-concept-logo-design-vector-600nw-2120483552.jpg",
    companyName: "ABCD Company Pvt Ltd.",
    tags: ["Agriculture", "Finance"],
    companyDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem officiis repellat, ducimus natus ipsam, incidunt vero odio rerum voluptatem omnis reiciendis distinctio voluptatibus!"
  },
  {
    img: "https://www.shutterstock.com/image-vector/farm-concept-logo-design-vector-600nw-2120483552.jpg",
    companyName: "ABCD Company Pvt Ltd.",
    tags: ["Agriculture", "Finance"],
    companyDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem officiis repellat, ducimus natus ipsam, incidunt vero odio rerum voluptatem omnis reiciendis distinctio voluptatibus!"
  },
  {
    img: "https://www.shutterstock.com/image-vector/farm-concept-logo-design-vector-600nw-2120483552.jpg",
    companyName: "ABCD Company Pvt Ltd.",
    tags: ["Agriculture", "Finance"],
    companyDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem officiis repellat, ducimus natus ipsam, incidunt vero odio rerum voluptatem omnis reiciendis distinctio voluptatibus!"
  },
]

  return (
    <>
<div className="flex flex-col items-center w-full px-10 bg-green-50">
    <div className="header w-full text-center text-5xl font-bold my-8">
        Find the Best Company for Your Product
    </div>
    {/* <div className="flex justify-center">
        <Carousel slides={slides} interval={3000} />
    </div> */}
    <div className="w-full flex flex-col items-center">
        {
            data.map((cardData,index) => (
                <ConnectCard key={index} cardData={cardData} />
            ))
        }
    </div>
</div>

    </>
    // <Carousel/>
  )
};

export default Connect;
