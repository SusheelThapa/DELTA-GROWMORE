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
    <div>
      <Sidebar pages={pages} />
    </div>
  );
};

export default Homepage;
