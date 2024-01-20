import Connect from "../pages/Connect";
import CropMonitor from "../pages/DataAnalytics";
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

/**
 * Represents the structure of a page object.
 * @typedef {Object} Page
 * @property {string} name - The name of the page.
 * @property {string} link - The link associated with the page.
 * @property {IconType} icon - The icon associated with the page.
 */
export interface Page {
  name: string;
  link: string;
  icon: IconType;
}

/**
 * Represents the properties expected by the Homepage component.
 * @typedef {Object} Props
 * @property {Page[]} pages - An array of page objects.
 * @property {string} activePage - The link of the currently active page.
 */
export interface Props {
  pages: Page[];
  activePage: string;
}

/**
 * The Homepage component which renders different pages based on the active page.
 * It includes a Sidebar component and conditionally renders one of several other components.
 *
 * @param {Props} props - The props for the Homepage component.
 * @returns {JSX.Element} The Homepage component.
 */
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
