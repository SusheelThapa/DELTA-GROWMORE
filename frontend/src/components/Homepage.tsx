import Connect from "../pages/Connect";
import CropMonitor from "../pages/CropMonitor";
import Dashboard from "../pages/Dashboard";
import Farmer from "../pages/Farmer";
import Finance from "../pages/Finance";
import GrowAI from "../pages/GrowAI";
import MarketAnalysis from "../pages/MarketAnalysis";
import Profile from "../pages/Profile";
import Subscription from "../pages/Subscription";
import Sidebar from "./Sidebar";
import { IconType } from "react-icons";

export interface Page {
  name: string;
  link: string;
  icon: IconType;
}

export interface Props {
  pages: Page[];
}

const Homepage = ({ pages }: Props) => {
  return (
    <div className="flex">
      <Sidebar pages={pages} />
      {false && <Dashboard />}
      {false && <Profile />}
      {false && <CropMonitor />}
      {true && <Farmer />}
      {false && <MarketAnalysis />}
      {false && <Connect />}
      {false && <Finance />}
      {false && <GrowAI />}
      {false && <Subscription />}
    </div>
  );
};

export default Homepage;
