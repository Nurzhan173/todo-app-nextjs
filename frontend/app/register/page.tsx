"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "@/app/api/auth/register";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    setIsLoading(true);
    try {
      await register(email, password);
      toast.success("Registration successful! Please log in.");
      router.push("/login");
    } catch (error) {
      console.error(error);
      toast.error("Failed to register. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-green-500 text-white p-2 rounded"
        >
          {isLoading ? "Registering..." : "Register"}
        </button>
      </form>
      <p className="mt-4">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500 underline">
          Login here
        </a>
      </p>
    </div>
  );
}
