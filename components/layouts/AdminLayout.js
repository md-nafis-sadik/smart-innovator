import { useState, useRef } from 'react';
import ThemeSettings from '../admin/ThemeSettings';
import AdminHeader from '../admin/AdminHeader';
import Sidebar from '../admin/Sidebar';



const AdminLayout = ({children, user }) => {

  const [showThemeSettings, setShowThemeSettings] = useState(false); // State for ThemeSettings visibility



  const [isExpanded, setIsExpanded] = useState(true);
  const mainDivRef = useRef(null);
  const sidebarDivRef = useRef(null);

  const toggleClasses = () => {
    
    setIsExpanded((prev) => !prev);
  };



  const toggleThemeSettings = () => {
    setShowThemeSettings(!showThemeSettings);
  };



  return (
    <div>
      <AdminHeader toggleThemeSettings={toggleThemeSettings}  toggleClasses={toggleClasses}/>
      <Sidebar isExpanded={isExpanded} sidebarDivRef={sidebarDivRef} />
      <section ref={mainDivRef} id="main-div" className={`h-full  bg-slate-200 p-4 relative overflow-y-auto dark:bg-slate-700 ${
          isExpanded ? 'lg:ml-60' : 'lg:ml-[74px]'
        }`}>
        <div className=" items-center justify-center min-h-screen dark:bg-slate-600 p-4">
      

      

      {children}
    </div>
      </section>
      {showThemeSettings && <ThemeSettings toggleThemeSettings={toggleThemeSettings} user={user} />}
    </div>
  );
};

export default AdminLayout;
