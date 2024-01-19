import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const App = () => {
  // This will contain all the pages of our project
  const pages = [
    "dashboard",
    "profile",
    "crop-monitor",
    "farmer",
    "market-analysis",
    "connect",
    "finance",
    "growai",
    "subscription",
  ];
  return (
    <>
      <Router>
        <Routes>
          {/* Here we will be write all the routes */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
