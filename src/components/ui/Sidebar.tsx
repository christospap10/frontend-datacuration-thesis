"use client";
import { useState } from "react";
import {
  Home,
  Notebook,
  Clapperboard,
  Menu,
  User,
  HelpingHand,
  Ticket,
  VenetianMask,
  X,
} from "lucide-react";

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { title: "Home", icon: <Home />, path: "/" },
    { title: "Venue", icon: <VenetianMask />, path: "/venue" },
    { title: "Organizer", icon: <Notebook />, path: "/organizer" },
    { title: "Contribution", icon: <HelpingHand />, path: "/contribution" },
    { title: "Person", icon: <User />, path: "/person" },
    { title: "Role", icon: <Clapperboard />, path: "/role" },
    { title: "Event", icon: <Ticket />, path: "/event" },
  ];

  return (
    <div
      className={`min-h-screen bg-gray-900 text-white transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!isCollapsed && <h1 className="text-xl font-bold">Admin Panel</h1>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded-lg hover:bg-gray-800 transition-colors"
        >
          {isCollapsed ? <Menu size={20} /> : <X size={20} />}
        </button>
      </div>

      <nav className="p-2">
        {menuItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-1"
          >
            <div className="text-gray-400">{item.icon}</div>
            {!isCollapsed && (
              <span className="text-sm font-medium">{item.title}</span>
            )}
          </a>
        ))}
      </nav>

      <div className="absolute bottom-0 p-4 w-full">
        {!isCollapsed && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-700" />
            <div>
              <p className="text-sm font-medium">iee ihu user</p>
              <p className="text-xs text-gray-400">Admin</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
