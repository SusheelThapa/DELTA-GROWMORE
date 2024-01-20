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
  {
    img: "https://media.istockphoto.com/id/1327656453/vector/leaf-icon-logo-design-template-farm-icon-design-organic-symbol-vector-agriculture-icon.jpg?s=612x612&w=0&k=20&c=dsyBh9Elp85ADR2TCApuGOXfXimMSp97YG_rgbfqNI4=",
    companyName: "Lorem Ipsum",
    tags: ["Farming", "Community"],
    companyDesc: "Lorem Ipsum is committed to fostering community through sustainable farming practices. We strive to provide fresh, locally grown produce while supporting local communities and economies."
  },
  {
    img: "https://media.istockphoto.com/id/1263328016/vector/leaf-logo-design-vector-illustration-abstract-leaf-logo-vector-in-creative-design-concept.jpg?s=612x612&w=0&k=20&c=qkqLz8WzQmWnnQlpbMxRXCyAepumQ2nPqA27zkoDEHQ=",
    companyName: "TechAgri Innovations",
    tags: ["Technology", "Agribusiness"],
    companyDesc: "TechAgri Innovations pioneers the integration of technology in agriculture. Our solutions aim to optimize farming processes, increase efficiency, and contribute to the overall advancement of the agribusiness sector."
  },
  
]

  return (
    <>
<div className="flex flex-col items-center w-full px-10 bg-green-50">
    <div className="header w-full text-center text-5xl font-bold my-8">
        Best Company for Your Product
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
