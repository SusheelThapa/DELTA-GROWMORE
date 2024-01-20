/**
 * @file Dashboard.tsx
 * @description Component displaying a dashboard with posts.
 *
 * @module Dashboard
 */

import Posts from "../../components/Posts";

/**
 * @function Dashboard
 * @description Component displaying a dashboard with posts.
 *
 * @returns {TSX.Element} - The Dashboard component.
 */
const Dashboard = () => {
  return <Posts className="w-full" />;
};

export default Dashboard;
