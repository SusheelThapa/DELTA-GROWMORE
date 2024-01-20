import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";

import { Page } from "../Homepage";

/**
 * Defines the shape of the props expected by the Sidebar component.
 * @typedef {Object} Props
 * @property {Page[]} pages - Array of page objects for sidebar navigation.
 */
interface Props {
  pages: Page[];
}

/**
 * Sidebar component providing a collapsible navigation menu.
 *
 * This component renders a list of navigation links based on the `pages` prop.
 * It features a toggle button to open or close the sidebar, and dynamically adjusts
 * its width based on its open state. Each navigation link includes an icon and
 * a label that are defined in the `Page` type.
 *
 * @param {Props} props - Props for the Sidebar component.
 * @returns {JSX.Element} The rendered Sidebar component.
 */
const Sidebar = ({ pages }: Props) => {
  // State variable to track the open/closed state of the sidebar
  const [open, setOpen] = useState(true);

  return (
    <section className="flex gap-6">
      {/* Sidebar container with dynamic width based on the 'open' state */}
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        {/* Toggle button for opening/closing the sidebar */}
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>

        {/* Navigation links based on the provided 'pages' prop */}
        <div className="mt-4 flex flex-col gap-4 relative ">
          {pages?.map((menu, i) => (
            <div className="hover:text-green-500" key={i}>
              {/* Link to navigate to the specified 'menu.link' */}
              <Link
                to={menu?.link}
                className={` ${"mt-5"} group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
              >
                {/* Icon associated with the menu */}
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>

                {/* Menu name with conditional styling for open/closed state */}
                <h2
                  style={{
                    transitionDelay: `${i + 2}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>

                {/* Alternate representation of menu name for closed state */}
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

// Exporting the Sidebar component as the default export
export default Sidebar;
