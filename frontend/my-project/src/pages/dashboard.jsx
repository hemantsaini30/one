import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN AREA */}
      <div className="flex flex-col flex-1">
        
        {/* NAVBAR */}
        <Navbar />

        {/* CONTENT */}
        <div className="p-6 overflow-y-auto">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;