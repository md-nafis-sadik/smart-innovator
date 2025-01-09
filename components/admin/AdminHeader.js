
import { useState } from "react";
import NotificationBar from "../NotificationBar";
import { FaBarsStaggered, FaMagnifyingGlass, FaReact, FaBell, FaGear } from "react-icons/fa6";

 // Ensure this is a client component

const AdminHeader = ({ toggleThemeSettings, toggleClasses }) => {
    const [isNotificationVisible, setNotificationVisible] = useState(false);

    return (
        <>
        <nav
        className="flex sticky top-0 bg-gray-50 dark:bg-slate-800 w-full drop-shadow-m justify-between py-1 shadow-md px-3 lg:px-5 lg:pl-3 z-40">
        <div className="flex">

            <span id="sidebar-toggle" onClick={toggleClasses}
                className="cursor-pointer p-2 text-xl my-auto mr-4">
                <FaBarsStaggered  className="fa-solid fa-bars-staggered text-indigo-900 dark:text-white" />

            </span>

            <span className="cursor-pointer my-auto p-2 text-xl flex items-center">
                <img src="/logo.png"  alt="logo" className="w-24"/>
                
            </span>



        </div>

        
        <div className="flex text-center items-center">


            <span id="notifications" onClick={() => setNotificationVisible(!isNotificationVisible)} className="cursor-pointer p-2 text-xl  my-auto">
            <FaBell
            
            className="fa-solid fa-gear text-gray-700 dark:text-white"
            
          />
            </span>
            <span id="ui-setting" onClick={toggleThemeSettings} className="cursor-pointer p-2 text-xl  my-auto">
                <FaGear className="fa-solid fa-gear text-gray-700 dark:text-white"/>
            </span>



        </div>
    </nav>

    <NotificationBar
        toggleNotificationBar={setNotificationVisible}
        isNotificationVisible={isNotificationVisible}
      />
    </>
)
};

export default AdminHeader;
