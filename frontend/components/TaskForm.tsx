"use client";

import { useState } from "react";
import { useAddTask } from "@/hooks/useAddTask";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const addTaskMutation = useAddTask();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Task title cannot be empty.");
      return;
    }
    addTaskMutation.mutate(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Enter task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className={`px-4 py-2 rounded-md text-white font-semibold ${
          addTaskMutation.isPending ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
        }`}
        disabled={addTaskMutation.isPending}
      >
        {addTaskMutation.isPending ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
}
