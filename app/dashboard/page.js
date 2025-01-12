"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "../../components/layouts/AdminLayout";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/user"); // Fetch user from API route
        if (!response.ok) throw new Error("Unauthorized");

        const data = await response.json();
        setUser(data);
      } catch (error) {
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return (
    <AdminLayout user={user}>
      <div className="bg-indigo-200 p-4">
        <h1 className="dark:text-gray-900">Welcome, {user?.name}</h1>
        <p className="dark:text-gray-900">Email: {user?.email}</p>
      </div>
    </AdminLayout>
  );
}
