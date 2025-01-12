"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import "../globals.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setLoading(false);
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        name,
        email,
        password,
        password_confirmation: confirmPassword,
      });

      setLoading(false);
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.errors || "Registration failed. Try again.");
    }
  };

  const isFormValid =
    name.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    confirmPassword.trim() !== "";

  return (
    <>
      <div className="bg-login h-screen bg-center flex justify-center items-center">
        <div className="bg-white w-full p-12 h-[100vh] sm:h-auto sm:w-[450px] shadow-lg">
          <div className="w-28">
            <img src="./logo.png" alt="Logo" />
          </div>
          <div className="text-2xl font-semibold text-gray-900 mt-5 mb-4">
            Register
          </div>
          <form onSubmit={handleRegister}>
            <div className="pb-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full outline-none h-8 rounded-sm border-b border-gray-700 pt-2 pb-3"
                placeholder="Full Name"
              />
            </div>
            <div className="pb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full outline-none h-8 rounded-sm border-b border-gray-700 pt-2 pb-3"
                placeholder="someone@example.com"
              />
            </div>
            <div className="pb-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full outline-none h-8 rounded-sm border-b border-gray-700 pt-2 pb-3"
                placeholder="Password"
              />
            </div>
            <div className="pb-4">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full outline-none h-8 rounded-sm border-b border-gray-700 pt-2 pb-3"
                placeholder="Confirm Password"
              />
            </div>
            <div className="text-xs pb-4">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-700 cursor-pointer hover:underline">
                Login here!
              </Link>
            </div>
            {error && (
              <p className="mb-2 text-red-500 text-sm">* {error}</p>
            )}
            {success && (
              <p className="mb-2 text-green-500 text-sm">{success}</p>
            )}
            <div className="flex justify-end">
              <button
                type="submit"
                className={`text-white px-8 py-1 ${
                  isFormValid
                    ? "bg-indigo-800 hover:bg-indigo-900"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                {loading ? "Loading..." : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
