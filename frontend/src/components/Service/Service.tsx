import { FaRocket } from "react-icons/fa";
import { HiSupport } from "react-icons/hi";
import { AiOutlineTeam } from "react-icons/ai";

/**
 * Component to display the services offered by the platform.
 * It showcases various services such as community support, 24/7 assistance, and dedicated teamwork.
 *
 * Each service is represented with an icon, a title, and a description, which are defined in the services array.
 *
 * @returns {JSX.Element} The Service component.
 */
const Service = () => {
  // Defines the list of services with their respective icons, titles, and descriptions.

  const services = [
    {
      id: 1,
      icon: (
        <FaRocket className="my-auto mr-4 bg-green-300 rounded-full text-4xl p-2" />
      ),
      title: "Farming Community!",
      description:
        "Farming community enables you to learn and connect from your peers thus making connections easier than ever! Now connect learn and earn",
    },
    {
      id: 2,
      icon: (
        <HiSupport className="my-auto mr-4 rounded-full bg-green-300 text-black text-4xl p-1" />
      ),
      title: "24/7 Support",
      description:
        "Our dedicated team provides you with support all the time throughout day and night so if you ever need our services just give us a call",
    },
    {
      id: 3,
      icon: (
        <AiOutlineTeam className="my-auto mr-4 bg-green-300 rounded-full text-4xl p-1" />
      ),
      title: "Dedicated Team",
      description:
        "Here we believe teamwork is dreamwork and this is what will take us to the ladders of succes so join our team today!",
    },
  ];
  // JSX structure for the component
  return (
    <div className="flex mx-80 space-x-16">
      <div className="left flex justify-center items-center ">
        <img
          src="https://media.istockphoto.com/id/1029301814/photo/farmer-ploughing-field.jpg?s=612x612&w=0&k=20&c=DUfDbLJ_gpkdPJZu3Nu3_Y_wdB64MP1lAoNtus1ewXQ="
          alt=""
        />
      </div>
      <div className="right p-4 flex space-y-6 flex-col">
        <div className="text-4xl font-bold mb-2">Why Chose US</div>
        <div className="text-zinc-400 mb-4">
          <div>
            Select GrowMore for cutting-edge technology, empowering farmers with
            precision insights, sustainable practices, and a vibrant community.
            Experience transformative agriculture, from resource optimization to
            market connectivity
          </div>
          <div className="mt-2">
            Optimize farming with AI, join GrowMore for sustainable practices
            and thriving communities.
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
