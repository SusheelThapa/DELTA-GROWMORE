import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import Homepage from "./components/Homepage";

const App = () => {
  // This will contain all the pages of our project
  const pages = [
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

  return (
    <>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Homepage pages={pages} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
