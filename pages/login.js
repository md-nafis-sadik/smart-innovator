import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";
import "../app/globals.css";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });

      // Store JWT token in cookie
      Cookies.set("token", response.data.token, { expires: 7 }); // Token expires in 7 days
      setLoading(false);
      // Redirect to dashboard
      router.push("/dashboard");
    } catch (err) {
      setLoading(false);
      setError("Invalid credentials or server error.");
    }
  };
  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <>
    

      <div className="bg-login h-screen bg-center flex justify-center items-center">
            <div className="bg-white w-full p-12 h-[100vh] sm:h-auto sm:w-[450px] shadow-lg">
                <div className="w-28"><img src="./logo.png"></img></div>
                <div className="text-2xl font-semibold text-gray-900 mt-5 mb-4">Login</div>
                <form onSubmit={handleLogin}>
                    <div className="pb-4">
                        
                        <div className="inline-block w-full">
                            <input 
                            type="email"
                    
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                            className="w-full outline-none h-8 rounded-sm border-b border-gray-700 pt-2 pb-3 focus:outline-none" placeholder="someone@example.com"></input>
                        </div>
                    </div>
                    
                    <div className="pb-4">
                        
                        <div className="inline-block w-full">
                            <input
                            type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                             className="w-full outline-none h-8 rounded-sm border-b border-gray-700 pt-2 pb-3 focus:outline-none" placeholder="passowrd"></input>
                        </div>
                    </div>

                    <div className="text-xs pb-4">No account? <Link href="/register" className="text-blue-700 cursor-pointer hover:underline">Create one!</Link></div>
                    {error && <p className="mb-2 text-red-500 text-sm">* {error}</p>}
                    <div className="flex justify-end"><button className={` text-white px-8 py-1 ${isFormValid
                      ? "bg-indigo-800 hover:bg-indigo-900"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}>{loading ? "Loading..." : "Login"}</button></div>
                </form>
            </div>
        </div>
    </>
  );
};

export default Login;
