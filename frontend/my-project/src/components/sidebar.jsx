// src/components/sidebar.js
const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-950 flex flex-col justify-between">

      {/* TOP */}
      <div>
        <h1 className="text-xl font-bold p-4 text-blue-400">
          EaseBuddy
        </h1>

        <nav className="flex flex-col gap-2 px-4">
          <button className="text-left p-2 rounded hover:bg-gray-800">
            Dashboard
          </button>
          <button className="text-left p-2 rounded hover:bg-gray-800">
            Subjects
          </button>
          <button className="text-left p-2 rounded hover:bg-gray-800">
            Chapters
          </button>
          <button className="text-left p-2 rounded hover:bg-gray-800">
            Tests
          </button>
        </nav>
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

        <button className="w-full bg-red-500 hover:bg-red-600 p-2 rounded">
          Sign Out
        </button>
      </div>

    </div>
  );
};

export default Sidebar;