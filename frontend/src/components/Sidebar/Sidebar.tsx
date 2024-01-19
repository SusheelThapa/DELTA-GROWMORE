import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
import {
  MdExplore,
  MdSubscriptions,
  MdOutlineAnalytics,
  MdOutlineDashboard,
} from "react-icons/md";
import { GoCopilot } from "react-icons/go";
import { ImStatsDots } from "react-icons/im";
import { GiFarmer } from "react-icons/gi";

const Sidebar = () => {
  const menus = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: MdOutlineDashboard,
    },
    {
      name: "Profile",
      link: "/profile",
      icon: AiOutlineUser,
    },
    {
      name: "Crop Monitor",
      link: "/crop-monitor",
      icon: ImStatsDots,
    },

    {
      name: "Farmer",
      link: "/farmer",
      icon: GiFarmer,
    },
    {
      name: "Market Analysis",
      link: "/market-analysis",
      icon: MdOutlineAnalytics,
    },
    {
      name: "Connect",
      link: "/connect",
      icon: MdExplore,
    },
    {
      name: "Finance",
      link: "/finance",
      icon: AiOutlineHeart,
    },
    {
      name: "Grow AI",
      link: "/growai",
      icon: GoCopilot,
    },
    {
      name: "Subscription",
      link: "/subscription",
      icon: MdSubscriptions,
    },
    {
      name: "Signout",
      link: "/",
      icon: FaSignOutAlt,
    },
  ];

  const [open, setOpen] = useState(true);

  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative ">
          {menus?.map((menu, i) => (
            <div className="hover:text-green-500" key={i}>
              <Link
                to={menu?.link}
                className={` ${"mt-5"} group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
