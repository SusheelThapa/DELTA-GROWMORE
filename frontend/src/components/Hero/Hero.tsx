import boy from "../../images/boy.webp";
import Button from "../Button";

const Hero = () => {
  return (
    <div className="m-4 mx-80 flex justify-between items-center">
      <div className="m-10 space-y-10 flex flex-col justify-evenly w-3/5">
        <div>
          <h1 className="my-4 text-5xl font-extrabold text-black">
            GrowMore: Cultivating{" "}
            <span className="text-green-400">Success</span>
          </h1>
          <h1 className="my-4 text-5xl font-extrabold text-black">
            Everytime, Everywhere.
          </h1>
        </div>
        <div className="text-gray-400 text-md">
          Embarking on a journey of agricultural transformation, GrowAI stands
          as a beacon of innovation. In the vast landscape of technology, it
          cultivates change, empowering farmers with sustainable solutions and
          ushering in a new era of growth and prosperity in the fields.
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
