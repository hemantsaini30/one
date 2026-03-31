import { Link } from "react-router-dom";

const English = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">English</h1>

      <div className="flex gap-4">
        
        <Link
          to="/english/firstflight"
          className="p-4 bg-[#1A1D21] border border-[#2A2F35] rounded-lg hover:bg-[#22262B] transition"
        >
          First Flight
        </Link>

        <Link
          to="/english/footprints"
          className="p-4 bg-[#1A1D21] border border-[#2A2F35] rounded-lg hover:bg-[#22262B] transition"
        >
          Footprints
        </Link>

      </div>
    </div>
  );
};

export default English;