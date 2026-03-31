import { Link } from "react-router-dom";

const Hindi = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-gray-200">Hindi</h1>

      <div className="grid grid-cols-2 gap-4">
        
        <Link
          to="/hindi/sparsh2"
          className="p-6 bg-[#1A1D21] border border-[#2A2F35] rounded-xl hover:bg-[#22262B] transition"
        >
          <h2 className="text-lg font-semibold text-gray-200">Sparsh 2</h2>
        </Link>

        <Link
          to="/hindi/kshitij2"
          className="p-6 bg-[#1A1D21] border border-[#2A2F35] rounded-xl hover:bg-[#22262B] transition"
        >
          <h2 className="text-lg font-semibold text-gray-200">Kshitij 2</h2>
        </Link>

      </div>
    </div>
  );
};

export default Hindi;