import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-[#111315] flex flex-col justify-between border-r border-[#2A2F35]">
      
      {/* TOP */}
      <div>
        {/* LOGO */}
        <div className="p-5 border-b border-[#2A2F35]">
          <h1 className="text-2xl font-bold tracking-wide text-gray-200">
            Ease<span className="text-amber-500">Buddy</span>
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Your Study Companion
          </p>
        </div>

        {/* SUBJECTS */}
        <div className="px-4 mt-5">
          <h2 className="text-xs uppercase text-gray-400 tracking-wider mb-3">
            Subjects
          </h2>

          <nav className="flex flex-col gap-2">
            
            {[
              { name: "English", path: "/english" },
              { name: "Hindi", path: "/hindi" },
              { name: "Mathematics", path: "/maths" },
              { name: "SST", path: "/sst" },
              { name: "Science", path: "/science" },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `p-3 rounded-lg border text-sm transition-all duration-200
                  ${
                    isActive
                      ? "bg-amber-500/10 text-amber-400 border-amber-500"
                      : "bg-[#1A1D21] text-gray-300 border-[#2A2F35] hover:bg-[#22262B]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

          </nav>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="p-4 border-t border-[#2A2F35]">
        <div className="flex items-center gap-3 mb-3">
          <img
            src="https://via.placeholder.com/40"
            className="rounded-full"
            alt="profile"
          />
          <div>
            <p className="text-sm text-gray-200">Hemant</p>
            <p className="text-xs text-gray-400">Student</p>
          </div>
        </div>

        <button className="w-full bg-amber-500 hover:bg-amber-400 text-black transition p-2 rounded-lg font-medium">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;