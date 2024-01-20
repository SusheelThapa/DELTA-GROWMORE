import { FaRocket } from "react-icons/fa";
import { HiSupport } from "react-icons/hi";
import { AiOutlineTeam } from "react-icons/ai";

const Service = () => {
  const services = [
    {
      id: 1,
      icon: (
        <FaRocket className="my-auto mr-4 bg-green-300 rounded-full text-4xl p-2" />
      ),
      title: "Farming Community!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpafugiat enim tempore!sit amet consectetur adipisicing elit. Culpafugiat enim tempore!",
    },
    {
      id: 2,
      icon: (
        <HiSupport className="my-auto mr-4 rounded-full bg-green-300 text-black text-4xl p-1" />
      ),
      title: "24/7 Support",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpafugiat enim tempore!sit amet consectetur adipisicing elit. Culpafugiat enim tempore!",
    },
    {
      id: 3,
      icon: (
        <AiOutlineTeam className="my-auto mr-4 bg-green-300 rounded-full text-4xl p-1" />
      ),
      title: "Dedicated Team",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpafugiat enim tempore!sit amet consectetur adipisicing elit. Culpafugiat enim tempore!",
    },
  ];
  return (
    <div className="flex mx-80 space-x-16">
      <div className="left flex justify-center items-center ">
        <img
          src="https://media.istockphoto.com/id/1029301814/photo/farmer-ploughing-field.jpg?s=612x612&w=0&k=20&c=DUfDbLJ_gpkdPJZu3Nu3_Y_wdB64MP1lAoNtus1ewXQ="
          alt=""
        />
      </div>
      <div className="right p-4 flex space-y-6 flex-col">
        <div className="text-4xl font-bold mb-4">Why Chose US</div>
        <div className="text-zinc-400 mb-4">
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus nemo
            aspernatur enim nulla dignissimos cupiditate adipisci ab aliquam rem
            tempore.
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad at dolor
            porro aspernatur mollitia pariatur?
          </div>
        </div>
        <ul>
          {services.map(({ id, icon, title, description }) => {
            return (
              <li
                key={id}
                className="mb-5 font-semibold flex flex-col space-y-3"
              >
                <div className="flex space-x-4 justify-start items-center">
                  {icon}
                  <h4>{title}</h4>
                </div>
                <div className="text-gray-400">{description}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Service;
