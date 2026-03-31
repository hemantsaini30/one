// src/components/dashboard.js
import Sidebar from "./sidebar";
import Navbar from "./navbar";

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
          <h1 className="text-2xl font-bold">Dashboard</h1>

          {/* Dummy cards */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-800 p-4 rounded-xl">Card 1</div>
            <div className="bg-gray-800 p-4 rounded-xl">Card 2</div>
            <div className="bg-gray-800 p-4 rounded-xl">Card 3</div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Dashboard;