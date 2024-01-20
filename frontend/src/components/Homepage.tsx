import Connect from "../pages/Connect";
import CropMonitor from "../pages/CropMonitor";
import Dashboard from "../pages/Dashboard";
import Farmer from "../pages/Farmer";
import Finance from "../pages/Finance";
import GrowAI from "../pages/GrowAI";
import MarketAnalysis from "../pages/MarketAnalysis";
import Profile from "../pages/Profile";
import Subscription from "../pages/Subscription";
import PredictPlantDisease from "./PredictPlantDisease";
import Sidebar from "./Sidebar";
import { IconType } from "react-icons";

export interface Page {
  name: string;
  link: string;
  icon: IconType;
}

export interface Props {
  pages: Page[];
  activePage: string;
}

const Homepage = ({ pages, activePage }: Props) => {
  return (
    <div className="flex">
      <Sidebar pages={pages} />
      {activePage == pages[0].link && <Dashboard />}
      {activePage == pages[1].link && <Profile />}
      {activePage == pages[2].link && <CropMonitor />}
      {activePage == pages[3].link && <PredictPlantDisease />}
      {activePage == pages[4].link && <Farmer />}
      {activePage == pages[5].link && <MarketAnalysis />}
      {activePage == pages[6].link && <Connect />}
      {activePage == pages[7].link && <Finance />}
      {activePage == pages[8].link && <GrowAI />}
      {activePage == pages[9].link && <Subscription />}
    </div>
  );
};

export default Homepage;
