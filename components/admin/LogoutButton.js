import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';
import axios from 'axios';

const LogoutButton = () => {
    const router = useRouter();
      // Handle logout
  const handleLogout = async () => {
    try {
      const token = Cookies.get('token');
      await axios.post('http://127.0.0.1:8000/api/logout', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Clear the token from cookies
      Cookies.remove('token');
      
      // Redirect to login page
      router.push('/login');
    } catch (err) {
      console.error('Logout error', err);
    }
  };

    return (
        <button
            onClick={handleLogout}
            className="sm:inline-flex text-white bg-gradient-to-br from-indigo-500 to-indigo-800 font-medium rounded-md text-sm px-6 py-2 h-9 w-full text-center inline-flex justify-center items-center shadow-md shadow-gray-300 dark:shadow-gray-800 hover:scale-[1.02] transition-transform z-20"
        >
            Logout
        </button>
    );
};

export default LogoutButton;
