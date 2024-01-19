import { FaRocket } from "react-icons/fa";
import { FcSupport } from "react-icons/fc";
import { AiOutlineTeam } from "react-icons/ai";

const Service = () => {
  return (
    <div className="flex p-12">
      <div className="left">
        <img
          src="https://media.istockphoto.com/id/1029301814/photo/farmer-ploughing-field.jpg?s=612x612&w=0&k=20&c=DUfDbLJ_gpkdPJZu3Nu3_Y_wdB64MP1lAoNtus1ewXQ="
          alt=""
          className=""
        />
      </div>
      <div className="right p-4">
        <div className="text-4xl font-bold mb-4">Why Chose US?</div>
        <div className="text-zinc-400">
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
          <li className="mt-4 mb-4 font-semibold">
            <div className="flex">
              <FaRocket className="my-auto mr-4 bg-green-300 rounded-full text-4xl p-1" />
              <h4>Farming Community!</h4>
            </div>
            <div className="text-zinc-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              fugiat enim tempore!
            </div>
          </li>
          <li className="mb-4 font-semibold">
            <div className="flex">
              <FcSupport className="my-auto mr-4 rounded-full bg-green-300 text-4xl p-1" />
              <h4>24/7 Support</h4>
            </div>
            <div className="text-zinc-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              fugiat enim tempore!
            </div>
          </li>
          <li className="mb-4 font-semibold">
            <div className="flex">
              <AiOutlineTeam className="my-auto mr-4 bg-green-300 rounded-full text-4xl p-1" />
              <h4>Dedicated Team</h4>
            </div>
            <div className="text-zinc-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              fugiat enim tempore!
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Service;
