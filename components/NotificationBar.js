import { useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaBell } from "react-icons/fa6";

function NotificationBar({ toggleNotificationBar, isNotificationVisible }) {
  const barRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (barRef.current && !barRef.current.contains(event.target)) {
        toggleNotificationBar();
      }
    }

    // Add event listener for clicks outside the notification bar
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleNotificationBar]);

  return (
    <section
      ref={barRef}
      className={`fixed top-0 z-50 right-0 h-screen w-[420px] bg-white shadow-lg transition transform duration-300 ease-in-out ${
        isNotificationVisible ? "translate-x-0" : "translate-x-full"
      }
      `}
    >
      <div className="relative flex flex-col h-full">
        <div className="bg-sky-600 text-white text-lg font-semibold px-6 py-[10px] flex items-center justify-between">
          <div>Notifications</div>
          <RxCross2
            className="text-xl cursor-pointer"
            onClick={() => toggleNotificationBar(false)}
          />
        </div>

        <ul className="flex-1 overflow-y-auto">
          {Array(2)
            .fill()
            .map((_, index) => (
              <li
                key={index}
                className="flex items-start px-6 py-4 border-b border-gray-200 hover:bg-purple-50"
              >
                <div className="flex items-center justify-center w-8 h-8 mr-4 bg-purple-100 rounded-full text-sky-600">
                  <FaBell className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1 text-sm text-gray-800">
                    <div className="font-semibold">Credits reset</div>
                    <div className="text-xs text-gray-500">Jul 11</div>
                  </div>
                  <div className="text-xs text-gray-600">
                    Start your new search with 50 free email searches and 100
                    verifications.
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default NotificationBar;
