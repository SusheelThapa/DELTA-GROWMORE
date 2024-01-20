import ConnectCard from "../../components/Connect/ConnectCard";

const Connect = () => {
  const data = [{
    img: "https://www.shutterstock.com/image-vector/farm-concept-logo-design-vector-600nw-2120483552.jpg",
    companyName: "AGRO Company Pvt Ltd.",
    tags: ["Agriculture", "Finance"],
    companyDesc: "AGRO Agriculture is a leading player in the agriculture industry, dedicated to providing innovative and sustainable solutions for modern farming. With a commitment to excellence, AGRO Agriculture leverages cutting-edge technology."
  },
  {
    img: "https://cdn.vectorstock.com/i/preview-1x/17/06/agriculture-technology-filled-gradient-logo-vector-48681706.jpg",
    companyName: "EcoHarvest Organics Ltd.",
    tags: ["Organic ", "Sustainability"],
    companyDesc: "EcoHarvest Organics is dedicated to promoting sustainable and organic farming practices. We prioritize environmental stewardship, delivering high-quality organic products while minimizing our ecological footprint."
  },
  {
    img: "https://png.pngtree.com/png-clipart/20230922/original/pngtree-green-leaf-logo-farm-friendly-health-vector-png-image_12526982.png",
    companyName: "GreenField AgroTech Group",
    tags: ["Agribusiness", "Innovation"],
    companyDesc: "GreenField AgroTech Group is a global leader in agribusiness, combining innovation and traditional values. Our integrated approach enhances productivity, ensuring a reliable supply chain for the agricultural community."
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
