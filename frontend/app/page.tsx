"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // If the user is authenticated, redirect to the tasks page
      router.push("/tasks");
    } else {
      // If the user is not authenticated, redirect to the login page
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Welcome to the To-Do App</h1>
      <p className="mt-4">Redirecting you...</p>
    </div>
  );
}
