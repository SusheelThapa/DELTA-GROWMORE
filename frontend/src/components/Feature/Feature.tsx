import { GiDiscussion } from "react-icons/gi";
import { MdInterests } from "react-icons/md";
import { SiPowerpages } from "react-icons/si";
import { FaRocket } from "react-icons/fa";
const Feature = () => {
  const features = [
    {
      id: 1,
      icon: <GiDiscussion className="bg-green-400 text-6xl p-3 rounded-full" />,
      title: "Create questions",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 2,
      icon: <MdInterests className="bg-yellow-300 text-6xl p-3 rounded-full" />,
      title: "Interests",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 3,
      icon: <SiPowerpages className="bg-red-400 text-6xl p-3 rounded-full" />,
      title: "Business Pages",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 4,
      icon: <FaRocket className="bg-gray-400 text-6xl p-2 rounded-full" />,
      title: "Answer comparision",
      description: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  return (
    <div className="flex justify-center items-center flex-col space-y-10 my-10  ">
      <div className="">
        <h1 className="text-5xl font-extrabold m-4 mb-6 text-center">
          Our Features
        </h1>
        <p className="text-md text-gray-400 text-center mx-96">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          praesentium amet ratione molestiae nulla, et fugit blanditiis quis ex
          totam earum aperiam mollitia, non fuga perferendis officiis vitae
          alias. Consequatur, ad placeat veritatis ea tempore in vero dolorem
          voluptates unde obcaecati neque laborum laboriosam esse provident.
          Veritatis facilis aliquam quasi!
        </p>
      </div>
      <div className="m-3  mx-96 p-3 flex justify-around space-x-24">
        {features.map(({ id, icon, title, description }) => (
          <div
            className="flex justify-center items-center flex-col space-y-3"
            key={id}
          >
            <div>{icon}</div>
            <div className="text-lg font-extrabold text-center ">{title}</div>
            <div className="text-center">{description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
