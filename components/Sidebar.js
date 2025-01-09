"use client"

import { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
// import LogoutButton from './LogoutButton';

export default function Sidebar({ toggleSidebar }) {
  const [theme, setTheme] = useState('light');
  const [currentPath, setCurrentPath] = useState("");


  // Check the theme on initial load and set it accordingly
  useEffect(() => {
    setCurrentPath(window.location.pathname);
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setTheme('dark');
    }
  }, []);

  // Set the theme in localStorage and update classes
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('bg-gray-900', 'text-white');
      document.body.classList.remove('bg-gray-100', 'text-black');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.add('bg-gray-100', 'text-black');
      document.body.classList.remove('bg-gray-900', 'text-white');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // Toggle theme when the checkbox is changed
  const handleToggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Blog", path: "/blog" },
    { label: "About Us", path: "/about" },
    { label: "Careers", path: "/careers" },
  ];

  return (
    <div
      
      id="ui-div"
      className="md:hidden z-50 dark:bg-gray-950/80 text-white z-sticky shadow-soft-3xl w-80 ease-soft fixed top-0 left-auto flex h-full min-w-0 flex-col break-words rounded-none border-0 bg-[#632ad9]/80 bg-clip-border px-2.5 backdrop-blur-2xl backdrop-saturate-200 duration-200 right-0"
    >
      <div className="relative pt-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
      <div className="absolute right-[297px]">
          <button
            
            onClick={toggleSidebar}
            className="inline-block p-1.5 mt-4 font-bold text-center uppercase align-middle transition-al border-0 rounded-full shadow-none cursor-pointer hover:scale-102 leading-pro text-xs ease-soft-in tracking-tight-soft bg-150 bg-x-25 active:opacity-85 text-gray-800 bg-white dark:text-slate-700 dark:bg-white"
          >
            <RxCross2 />
          </button>
        </div>

        
      </div>


      <div className="mt-16 space-y-3 text-sm">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className={`px-2 py-2.5 text-white  ${
              currentPath === item.path ? "border-b-2 border-[#8cff00]" : ""
            }`}
          >
            <a href={item.path}>{item.label}</a>
          </div>
        ))}
      </div>


      {/* <div className="flex-auto mt-4 p-6 pt-0 sm:pt-4">
        <div className="mt-4 flex justify-between items-center">
          <span className="text-center pr-4 text-sm">Light / Dark</span>

          
          <div className="min-h-6  block pl-0 mb-5">
          <label className="switch">
            <input
              type="checkbox"
              checked={theme === 'dark'}
              onChange={handleToggleTheme}
            />
            <span className="slider"></span>
          </label>

        </div>
        
        </div>
      </div> */}
      <div className='p-4'>
      {/* <LogoutButton/> */}
      </div>
    </div>
  );
}
