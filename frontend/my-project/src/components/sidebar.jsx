import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-950 flex flex-col justify-between shadow-xl">
      
      {/* TOP */}
      <div>
        {/* LOGO */}
        <div className="p-5 border-b border-gray-800">
          <h1 className="text-2xl font-extrabold tracking-wide text-blue-400">
            Ease<span className="text-white">Buddy</span>
          </h1>
          <p className="text-xs text-gray-400 mt-1">Your Study Companion</p>
        </div>

        {/* SUBJECTS */}
        <div className="px-4 mt-4">
          <h2 className="text-xs uppercase text-gray-400 tracking-wider mb-3">
            Subjects
          </h2>

          <nav className="flex flex-col gap-3">
            
            {[
              { name: "English", path: "/english" },
              { name: "Hindi", path: "/hindi" },
              { name: "Maths", path: "/maths" },
              { name: "SST", path: "/sst" },
              { name: "Science", path: "/science" },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `p-3 rounded-xl transition-all duration-200 
                  ${
                    isActive
                      ? "bg-blue-500 text-white shadow-lg"
                      : "bg-gray-900 text-gray-300 hover:bg-gray-800 hover:scale-105"
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
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-3 mb-3">
          <img
            src="https://via.placeholder.com/40"
            className="rounded-full"
            alt="profile"
          />
          <div>
            <p className="text-sm">Hemant</p>
            <p className="text-xs text-gray-400">Student</p>
          </div>
        </div>

        <button className="w-full bg-red-500 hover:bg-red-600 transition p-2 rounded-lg">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;