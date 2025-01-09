"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative w-full text-white mx-auto h-full xl:h-[320px] overflow-hidden py-8 px-10 md:px-16 lg:px-20" >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/footer-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#05062f] bg-opacity-85"></div>

      {/* Top Section */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-0 py-8">
        {/* Logo and Navigation */}
        <div className="flex flex-col items-center md:flex-row justify-center md:items-center gap-6  mb-8 lg:mb-0">
          <div>
          <img src="/logo.png" alt="logo" className="w-36 lg:w-40" />
          </div>
          
        </div>

        <nav className="flex flex-col items-center md:flex-row justify-center gap-6 mb-0 md:mb-8 lg:mb-0">
        <div>
            <a href="#" className="hover:text-[#9eff00]">
              Home
            </a>
            </div>
            <div>
            <a href="#" className="hover:text-[#9eff00]">
              Services
            </a></div>
            <div>
            <a href="#" className="hover:text-[#9eff00]">
              Portfolio
            </a></div>
            <div>
            <a href="#" className="hover:text-[#9eff00]">
              Blog
            </a></div>
            <div>
            <a href="#" className="hover:text-[#9eff00]">
              About Us
            </a></div>
            <div>
            <a href="#" className="hover:text-[#9eff00]">
              Careers
            </a></div>
          </nav>

        {/* Social Media Links */}
        <div className="flex justify-center items-center mt-6 md:mt-0 gap-4 border border-gray-300 p-4 rounded-lg">
          <span className="text-sm hidden xl:block text-gray-100">Stay Connected</span>
          <div className="flex gap-3">
            <a
              href="#"
              className="w-[60px] h-[60px] flex items-center justify-center rounded-md opacity-80 border border-gray-500 bg-gradient-to-b from-gray-400 via-gray-800 to-transparent hover:bg-lime-500 transition"
            >
              <FaFacebookF size={23} className="text-[#9eff00] hover:text-white" />
            </a>
            <a
              href="#"
              className="w-[60px] h-[60px] flex items-center justify-center rounded-md opacity-80 border border-gray-500 bg-gradient-to-b from-gray-400 via-gray-800 to-transparent hover:bg-lime-500 transition"
            >
              <FaTwitter size={23} className="text-[#9eff00]" />
            </a>
            <a
              href="#"
              className="w-[60px] h-[60px] flex items-center justify-center rounded-md opacity-80 border border-gray-500 bg-gradient-to-b from-gray-400 via-gray-800 to-transparent hover:bg-lime-500 transition"
            >
              <FaLinkedinIn size={23} className="text-[#9eff00] hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 border-t border-gray-600"></div>

      {/* Bottom Section */}
      <div className="relative z-10 px-6 sm:px-0 py-10 block lg:flex items-center justify-between text-md">
        {/* Contact Information */}
        <div className="flex flex-col items-center md:flex-row justify-center md:flex-row md:items-center gap-6 text-center md:text-left mb-8 lg:mb-0">
          <div className="flex items-center gap-3">
            <span className="text-[#9eff00]"><FaEnvelope size={20}/></span>
            <span>admin@smartinnovator.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#9eff00]"><FaPhoneAlt size={20}/></span>
            <span>+91 91813 23 2309</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#9eff00]"><FaLocationDot size={20}/></span>
            <span>Somewhere in the World</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 md:mt-0 text-gray-400 text-center lg:text-right">
          © 2025 Smart Innovators. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
