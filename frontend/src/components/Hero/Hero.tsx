import boy from "../../images/boy.webp";
import Button from "../Button";

const Hero = () => {
  return (
    <div className="m-4 mx-96 flex justify-between items-center">
      <div className="m-10 space-y-10 flex flex-col justify-evenly w-3/5">
        <div>
          <h1 className="my-4 text-5xl font-extrabold text-black">
            Ask <span className="text-green-400">anything</span>
          </h1>
          <h1 className="my-4 text-5xl font-extrabold text-black">
            anytime anywhere
          </h1>
        </div>

        <div className="text-gray-400 text-md ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          minus iure possimus nesciunt. Voluptates hic perferendis eum dicta,
          minus dignissimos ut consequatur doloremque alias nihil magni modi
          harum inventore vero iste libero minima, voluptatibus temporibus,
        </div>
        <div className="flex space-x-5 items-center mt-10">
          <Button className="w-40 bg-green-600 text-white hover:bg-green-700 rounded-lg text-lg px-2 py-2 text-center">
            Join Free
          </Button>
          <span className="text-xl">Watch Video</span>
        </div>
      </div>
      <div>
        <img className="object-cover h-96" src={boy} alt="image description" />
      </div>
    </div>
  );
};

export default Hero;
