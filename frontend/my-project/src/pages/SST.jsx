import { Link } from "react-router-dom";

const SST = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-200">SST</h1>

      <div className="grid grid-cols-2 gap-4">
        
        <Link
          to="/sst/history"
          className="p-6 bg-[#1A1D21] border border-[#2A2F35] rounded-xl hover:bg-[#22262B] transition"
        >
          <h2 className="text-lg font-semibold text-gray-200">History</h2>
        </Link>

        <Link
          to="/sst/geography"
          className="p-6 bg-[#1A1D21] border border-[#2A2F35] rounded-xl hover:bg-[#22262B] transition"
        >
          <h2 className="text-lg font-semibold text-gray-200">Geography</h2>
        </Link>

        <Link
          to="/sst/civics"
          className="p-6 bg-[#1A1D21] border border-[#2A2F35] rounded-xl hover:bg-[#22262B] transition"
        >
          <h2 className="text-lg font-semibold text-gray-200">Civics</h2>
        </Link>

        <Link
          to="/sst/economics"
          className="p-6 bg-[#1A1D21] border border-[#2A2F35] rounded-xl hover:bg-[#22262B] transition"
        >
          <h2 className="text-lg font-semibold text-gray-200">Economics</h2>
        </Link>

      </div>
    </div>
  );
};

export default SST;