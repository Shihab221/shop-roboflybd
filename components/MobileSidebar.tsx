"use client";
import React from "react";
import { sidebarData } from "../Constant";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (open: boolean) => void }) => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"} z-50`}>
      {/* Sidebar Panel */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-slate-900 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-white text-2xl">
            <IoClose />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="p-4">
          {sidebarData.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-gray-200 font-bold text-sm mb-2">{section.title}</h3>
              <ul>
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    onClick={() => handleNavigation(item.path)}
                    className="flex items-center py-2 px-4 rounded-md hover:bg-gray-800 cursor-pointer"
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span className="text-gray-200">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
