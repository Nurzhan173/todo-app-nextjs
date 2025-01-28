"use client";

import {useState} from "react";
import {useAddTask} from "@/hooks/useAddTask";

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
    <form onSubmit={handleSubmit} className="flex space-x-4 mb-4">
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 p-2 border rounded"
      />
      <button
        type="submit"
        className={`p-2 rounded ${
          addTaskMutation.isPending ? "bg-gray-400" : "bg-blue-500 text-white"
        }`}
        disabled={addTaskMutation.isPending}
      >
        {addTaskMutation.isPending ? "Adding..." : "Add Task"}
      </button>
    </form>
  );
}
