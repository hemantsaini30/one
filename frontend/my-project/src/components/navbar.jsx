// src/components/navbar.js
const Navbar = () => {
  return (
    <div className="h-16 bg-gray-900 flex items-center justify-between px-6 border-b border-gray-800">
      
      {/* LEFT */}
      <h2 className="text-lg font-semibold">
        Dashboard
      </h2>

      {/* CENTER */}
      <div className="flex-1 flex justify-center">
        <input
          type="text"
          placeholder="Search chapters..."
          className="w-1/2 bg-gray-800 px-4 py-2 rounded outline-none"
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <span className="cursor-pointer">🔔</span>
        <span className="cursor-pointer">⚙️</span>
        <img
          src="https://via.placeholder.com/35"
          className="rounded-full cursor-pointer"
          alt="profile"
        />
      </div>

    </div>
  );
};

export default Navbar;