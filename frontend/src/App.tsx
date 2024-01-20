import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

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
import MarketAnalysisResult from "./pages/MarketAnalsisResult";
import Sidebar from "./components/Sidebar";
import AuthPage from "./pages/AuthPage";

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

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route
            path="/dashboard"
            element={<Homepage pages={pages} activePage={pages[0].link} />}
          />
          <Route
            path="/profile"
            element={<Homepage pages={pages} activePage={pages[1].link} />}
          />
          <Route
            path="/crop-monitor"
            element={<Homepage pages={pages} activePage={pages[2].link} />}
          />
          <Route
            path="/farmer"
            element={<Homepage pages={pages} activePage={pages[3].link} />}
          />
          <Route
            path="/market-analysis"
            element={<Homepage pages={pages} activePage={pages[4].link} />}
          />
          <Route
            path="/connect"
            element={<Homepage pages={pages} activePage={pages[5].link} />}
          />
          <Route
            path="/finance"
            element={<Homepage pages={pages} activePage={pages[6].link} />}
          />
          <Route
            path="/growai"
            element={<Homepage pages={pages} activePage={pages[7].link} />}
          />
          <Route
            path="/subscription"
            element={<Homepage pages={pages} activePage={pages[8].link} />}
          />

          <Route
            path="/market-analysis/result"
            element={
              <div className="flex">
                <Sidebar pages={pages} />
                <MarketAnalysisResult />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
