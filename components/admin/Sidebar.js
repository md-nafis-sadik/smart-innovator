import { FaDashcube, FaCaretDown, FaPaperPlane, FaTicket, FaUserShield } from "react-icons/fa6";
import { MdSubscriptions } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import Link from "next/link";
import { useState } from "react";
import { FaUserFriends } from "react-icons/fa";

export default function Sidebar({ isExpanded, sidebarDivRef }) {
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = (menu) => {
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const menuItems = [
        { icon: <FaDashcube />, label: "Dashboard", key: "dashboard", link: "/admin/dashboard", hasSubmenu: false },
        {
            icon: <FaUserFriends />,
            label: "Users",
            key: "users",
            link: "/admin/users",
            hasSubmenu: true,
            submenuLinks: [
                { label: "User List", link: "/admin/users" },
                { label: "Add User", link: "/admin/users/add" }
            ]
        },

        {
            icon: <FaPaperPlane />,
            label: "Plans",
            key: "Plans",
            link: "/admin/plans",
            hasSubmenu: true,
            submenuLinks: [
                { label: "Plans List", link: "/admin/plans" },
                { label: "Add Plan", link: "/admin/plans/add" }
            ]
        },
        {
            icon: <MdSubscriptions />,
            label: "Subscriptions",
            key: "Subscriptions",
            link: "/admin/subscriptions",
            hasSubmenu: true,
            submenuLinks: [
                { label: "Subscription List", link: "/admin/subscriptions" },
                { label: "Add Subscription", link: "/admin/subscriptions/add" }
            ]
        },
        {
            icon: <GrTransaction />,
            label: "Transactions",
            key: "Transactions",
            link: "/admin/transactions",
            hasSubmenu: true,
            submenuLinks: [
                { label: "Transaction List", link: "/admin/transactions" },
                { label: "Add Transaction", link: "/admin/transactions/add" }
            ]
        },

        {
            icon: <FaTicket />,
            label: "Coupons",
            key: "Coupons",
            link: "/admin/coupons",
            hasSubmenu: true,
            submenuLinks: [
                { label: "Coupon List", link: "/admin/coupons" },
                { label: "Add Coupon", link: "/admin/coupons/add" }
            ]
        },
        {
            icon: <FaUserShield />,
            label: "Admins",
            key: "Admins",
            link: "/admin/admins",
            hasSubmenu: true,
            submenuLinks: [
                { label: "Admin List", link: "/admin/admins" },
                { label: "Add Admin", link: "/admin/admins/add" }
            ]
        },

    ];

    return (
        <section
            ref={sidebarDivRef}
            id="dashboard-sidebar"
            className={`text-sm sidebar-main px-3 py-3 shadow-md bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white hover-scrollbar fixed top-0 left-0 flex-col flex-shrink-0 pt-[70px] h-full duration-200 lg:flex transition-width z-10 ${isExpanded ? 'lg:w-60 hidden' : 'lg:w-[74px] block'}`}
        >
            <ul id="dashboard">
                {menuItems.map((item) => (
                    <li key={item.key} className={`mt-1 ${isExpanded ? "w-52" : "w-52 lg:w-12"} pt-2`}>
                        {/* Render main Link only if there's no submenu */}
                        {!item.hasSubmenu ? (
                            <Link href={item.link}>
                                <div className="flex items-center cursor-pointer py-1.5 px-2 justify-between hover:bg-gray-200 dark:hover:bg-gray-500 dark:hover:text-white active:bg-white rounded-sm transition-colors delay-75">
                                    <div className="flex items-center justify-center">
                                        <span className="stroke-none shadow-md mr-2 flex text-sm h-8 w-8 items-center justify-center rounded-lg bg-white bg-center p-2 text-center text-gray-700">
                                            {item.icon}
                                        </span>
                                        <span className={`pl-2 font-semibold dash-hide ${isExpanded ? "hidden lg:block" : "lg:hidden"}`}>
                                            {item.label}
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ) : (
                            <div
                                onClick={() => toggleMenu(item.key)}
                                className="flex items-center cursor-pointer py-1.5 px-2 justify-between hover:bg-gray-200 dark:hover:bg-gray-500 dark:hover:text-white active:bg-white rounded-sm transition-colors delay-75"
                            >
                                <div className="flex items-center justify-center">
                                    <span className="stroke-none shadow-md mr-2 flex text-sm h-8 w-8 items-center justify-center rounded-lg bg-white bg-center p-2 text-center text-gray-700">
                                        {item.icon}
                                    </span>
                                    <span className={`pl-2 font-semibold dash-hide ${isExpanded ? "hidden lg:block" : "lg:hidden"}`}>
                                        {item.label}
                                    </span>
                                </div>
                                {item.hasSubmenu && (
                                    <span className={`text-black dash-hide ${isExpanded ? "hidden lg:block" : "lg:hidden"}`}>
                                        <FaCaretDown className="fa-solid fa-caret-down text-sm text-gray-700 dark:text-white dark:hover:text-gray-900" />
                                    </span>
                                )}
                            </div>
                        )}
                        {/* Render submenu links if available */}
                        {item.hasSubmenu && (
                            <div className={`${activeMenu === item.key ? "block" : "hidden"} transition-height duration-500`}>
                                <ul>
                                    {item.submenuLinks && item.submenuLinks.map((submenuItem, index) => (
                                        <li key={index}>
                                            <Link href={submenuItem.link}>
                                                <div className="flex w-full cursor-pointer justify-between pl-14 py-2 hover:bg-gray-200 active:bg-white rounded-md text-gray-700 dark:text-white dark:hover:text-gray-900">
                                                    {submenuItem.label}
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
}
