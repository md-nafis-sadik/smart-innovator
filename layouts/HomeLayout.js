"use client"


import Image from "next/image";
import Homepage from '../pages/Homepage';

import Header from '../components/Header';
import { useState, useRef } from 'react';
import Sidebar from '../components/Sidebar';
import Footer from "@/components/Footer";

export default function HomeLayout({children}) {
    const [showSidebar, setShowSidebar] = useState(false); // State for ThemeSettings visibility



  const [isExpanded, setIsExpanded] = useState(true);
  const mainDivRef = useRef(null);

  const toggleClasses = () => {
    
    setIsExpanded((prev) => !prev);
  };



  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      <Header toggleSidebar={toggleSidebar}  toggleClasses={toggleClasses}/>

      {children}

      {showSidebar && <Sidebar toggleSidebar={toggleSidebar} />}

    <Footer />
    </>
  );
}
