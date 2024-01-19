import { RiCommunityLine } from "react-icons/ri";
import { LiaConnectdevelop } from "react-icons/lia";
import { SiCoinmarketcap } from "react-icons/si";
import { PiMonitorDuotone } from "react-icons/pi";
import { GiTreeGrowth } from "react-icons/gi";
import { GrAnalytics } from "react-icons/gr";

const Box = () => {
  return (
    <div className="m-4 p-8 mx-64">
      <div className="grid grid-cols-4 gap-4">
        <div className=" p-8 m-8 shadow-lg rounded-md col-span-2 bg-gray-50">
          <h4 className="text-green-700 text-3xl">Groups for everything</h4>
          <div className="text-zinc-400">
            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur saepe sapiente ipsam!
            </div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </div>
        <div className=" p-8 m-8 shadow-lg rounded-md bg-gray-50">
          <RiCommunityLine className="text-5xl" />
          <h6 className="text-2xl">Community</h6>
          <div className="text-zinc-400">
            <div>Lorem ipsum dolor sit fuck.</div>
            <div>Lorem, ipsum okay.</div>
          </div>
        </div>
        <div className=" p-8 m-8 shadow-lg rounded-md bg-gray-50">
          <GrAnalytics className="text-5xl" />
          <h6 className="text-2xl">Market Analytics</h6>
          <div className="text-zinc-400">
            <div>Lorem ipsum dolor sit fuck.</div>
            <div>Lorem, ipsum okay.</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className=" p-8 m-8 shadow-lg rounded-md bg-gray-50">
          <GiTreeGrowth className="text-5xl" />
          <h6 className="text-2xl">growAI</h6>
          <div className="text-zinc-400">
            <div>Lorem ipsum dolor sit fuck.</div>
            <div>Lorem, ipsum okay.</div>
          </div>
        </div>
        <div className=" p-8 m-8 shadow-lg rounded-md bg-gray-50">
          <PiMonitorDuotone className="text-5xl" />
          <h6 className="text-2xl">Crop Monitoring</h6>
          <div className="text-zinc-400">
            <div>Lorem ipsum dolor sit fuck.</div>
            <div>Lorem, ipsum okay.</div>
          </div>
        </div>
        <div className=" p-8 m-8 shadow-lg rounded-md bg-gray-50">
          <SiCoinmarketcap className="text-5xl" />
          <h6 className="text-2xl">Farmerce</h6>
          <div className="text-zinc-400">
            <div>Lorem ipsum dolor sit fuck.</div>
            <div>Lorem, ipsum okay.</div>
          </div>
        </div>
        <div className=" p-8 m-8 shadow-lg rounded-md bg-gray-50">
          <LiaConnectdevelop className="text-5xl" />
          <h6 className="text-2xl">Connect!</h6>
          <div className="text-zinc-400">
            <div>Lorem ipsum dolor sit fuck.</div>
            <div>Lorem, ipsum okay.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
