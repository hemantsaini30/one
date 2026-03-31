// src/components/Navbar.jsx
import { Flame, HelpCircle, Bell, User, BookOpen, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full border-b border-[#2A2F35] bg-[#1A1D21]/80 backdrop-blur-md">
      
      <div className="h-16 flex items-center justify-between px-4 md:px-6">

        {/* LEFT */}
        <div className="flex items-center gap-3 flex-1 min-w-0">

          {/* Mobile menu */}
          <Menu 
            className="md:hidden text-gray-400 cursor-pointer"
            onClick={() => setOpen(!open)}
          />

          {/* Search */}
          <div className="hidden md:flex items-center bg-[#111315] border border-[#2A2F35] px-4 py-2 rounded-xl w-full max-w-sm focus-within:ring-1 focus-within:ring-amber-400 transition">
            <input
              type="text"
              placeholder="Search chapters..."
              className="bg-transparent outline-none w-full text-sm text-gray-300 placeholder-gray-500"
            />
          </div>

          {/* Ask Doubt */}
          <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-[#22262B] hover:bg-[#2A2F35] text-sm text-gray-300 transition border border-[#2A2F35]">
            <HelpCircle size={16} className="text-amber-400" />
            Ask Doubt
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">

          {/* Streak */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#111315] border border-[#2A2F35]">
            <Flame size={16} className="text-amber-400" />
            <span className="text-sm text-gray-400">7 Day</span>
          </div>

          {/* Test Button (only place with accent) */}
          <button className="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-sm text-black transition shadow-sm">
            <BookOpen size={16} />
            <span className="hidden sm:inline">Test</span>
          </button>

          {/* Bell */}
          <Bell className="cursor-pointer text-gray-400 hover:text-amber-400 transition" />

          {/* Profile */}
          <div className="w-9 h-9 rounded-full bg-[#111315] border border-[#2A2F35] flex items-center justify-center hover:bg-[#22262B] cursor-pointer transition">
            <User size={18} className="text-gray-300" />
          </div>

        </div>
      </div>

      {/* MOBILE */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 border-t border-[#2A2F35] bg-[#1A1D21]">

          <input
            type="text"
            placeholder="Search..."
            className="bg-[#111315] border border-[#2A2F35] px-4 py-2 rounded-xl outline-none text-gray-300"
          />

          <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#22262B] text-gray-300 border border-[#2A2F35]">
            <HelpCircle size={16} className="text-amber-400" />
            Ask Doubt
          </button>

          <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-amber-500 text-black">
            <BookOpen size={16} />
            Take Test
          </button>

        </div>
      )}
    </div>
  );
};

export default Navbar;