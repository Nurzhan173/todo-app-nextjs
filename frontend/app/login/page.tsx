"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/app/api/auth/login";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await login(email, password);
      toast.success("Login successful!");
      router.push("/tasks");
    } catch (error) {
      console.error(error);
      toast.error("Invalid email or password.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 text-white p-2 rounded"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p className="mt-4">
        Don’t have an account?{" "}
        <a href="/register" className="text-blue-500 underline">
          Register here
        </a>
      </p>
    </div>
  );
}
