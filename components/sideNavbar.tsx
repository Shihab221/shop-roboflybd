"use client";
import React, { useState } from "react";
import { sidebarData } from "../Constant.jsx";
import { useRouter } from 'next/navigation';
import { IoMenu,IoClose  } from "react-icons/io5";
const sideNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();
  const path:any=sidebarData[0].items[0].path;

  const handleNavigation = (path:string) => {
      router.push(path); // Navigate to the specified path
  };

  return (
    <div className="flex flex-row bg-slate-950">
      <div className="px-2 ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 my-2 rounded-md focus:outline-none text-white"
        >
          {isOpen ? (
            // <Image src={close} width={32} height={32} alt="close icon" />
            <IoClose/>
          ) : (
            // <Image src={open} width={32} height={32} alt="open icon" />
            <IoMenu/>
          )}
        </button>
      </div>
      
      <div className="flex flex-col">
        {isOpen && (
          <div className="w-64 h-screen p-4 px-2">
            {sidebarData.map((section, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-gray-200 font-bold text-sm mb-2">
                  {section.title}
                </h3>
                <ul>
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      onClick={() => handleNavigation(item.path)}
                      className="flex items-center justify-between py-2 px-4 rounded-md hover:bg-gray-800 cursor-pointer"
                    >
                      <div className="flex items-center">
                        <span className="mr-3">{item.icon}</span>
                        <span className="text-gray-200">{item.name}</span>
                      </div>
                      {item.badge && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default sideNavbar;
