"use client";

import { useState, useEffect } from "react"; // Correct import for useState and useEffect
import { FaBars } from "react-icons/fa6";

const Header = ({ toggleSidebar }) => {
  const [currentPath, setCurrentPath] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Set the current path on mount
    setCurrentPath(window.location.pathname);

    // Scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Blog", path: "/blog" },
    { label: "About Us", path: "/about" },
    { label: "Careers", path: "/careers" },
  ];

  return (
    <nav
      className={`flex justify-between items-center sticky top-0 w-full py-2 px-4 lg:px-16 z-40 transition-colors duration-300 ${
        isScrolled ? "bg-[#080c4b] bg-opacity-80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="flex">
        <span className="cursor-pointer my-auto p-2 text-xl flex items-center">
          <img src="/logo.png" alt="logo" className="w-28 lg:w-32" />
        </span>
      </div>

      <div className="hidden md:flex space-x-1 text-sm">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className={`px-6 py-2.5 text-white rounded-md ${
              currentPath === item.path ? "border-b-2 border-[#8cff00]" : ""
            }`}
          >
            <a href={item.path} className="hover:text-[#8cff00]">{item.label}</a>
          </div>
        ))}
      </div>

      <div className="hidden md:block">
        <button className="bg-[#8cff00] text-sm font-medium px-4 py-2 rounded-sm transition transform hover:scale-105 hover:shadow-lg">
          Contact us
        </button>
      </div>

      <div className="flex text-center items-center md:hidden">
        <span
          id="ui-setting"
          onClick={toggleSidebar}
          className="cursor-pointer p-2 text-xl my-auto"
        >
          <FaBars className="fa-solid fa-gear text-[#8cff00] dark:text-white" />
        </span>
      </div>
    </nav>
  );
};

export default Header;
