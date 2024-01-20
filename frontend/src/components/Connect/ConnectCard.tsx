import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

interface Props {
  cardData: {
    companyName: string;
    tags?: string[];
    companyDesc: string;
    img: string;
  };
}

const ConnectCard = ({ cardData }: Props) => {
  return (
    <div className="card w-[62rem] h-[15rem] rounded-2xl flex flex-row shadow-xl border my-2 mx-16rem bg-white hover:border-2 hover:border-gray-300">
      <div className="h-full w-[25%] flex justify-center items-center mr-5">
        <img
          src={cardData.img}
          alt=""
          className="rounded-full h-[90%] border-[3px]"
        />
      </div>
      <div className="h-full w-[65%] flex flex-col mt-3">
        <div className="company-name text-3xl font-bold">
          {cardData.companyName}
          <hr />
        </div>
        <div className="company-tags flex justify-row gap-5 h-[16%] mt-3">
          {cardData.tags && // Add a conditional check here
            cardData.tags.map((tag) => (
              <button
                key={tag}
                className="bg-green-500 w-[7rem] h-[2rem] rounded-lg"
              >
                {tag}
              </button>
            ))}
        </div>
        <div className="desc h-[35%]">{cardData.companyDesc}</div>
        {/* <div className="button h-[25%]">
                    <button className="bg-blue-500 w-[10rem] text-xl h-[2.5rem] rounded-lg text-white">Connect</button>
                </div> */}
        <div className="button h-[25%] flex items-center justify gap-4 text-white hover:cursor-pointer">
          <p className="social-icon">
            <SiFacebook className="text-3xl text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out" />
          </p>
          <p className="social-icon">
            <AiFillInstagram className="text-3xl text-pink-500 hover:text-pink-600 transition duration-300 ease-in-out" />
          </p>
          <p className="social-icon">
            <FaLinkedin className="text-3xl text-blue-400 hover:text-blue-500 transition duration-300 ease-in-out" />
          </p>
          <p className="social-icon">
            <FaYoutube className="text-3xl text-red-500 hover:text-red-600 transition duration-300 ease-in-out" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectCard;
