"use client";

import { useUpdateTask } from "@/hooks/useUpdateTask";
import { useDeleteTask } from "@/hooks/useDeleteTask";

export default function TaskItem({ task }: { task: any }) {
  const updateTaskMutation = useUpdateTask();
  const deleteTaskMutation = useDeleteTask();

  const handleToggleStatus = () => {
    updateTaskMutation.mutate({ id: task.id, status: !task.status });
  };

  const handleDelete = () => {
    deleteTaskMutation.mutate(task.id);
  };

  return (
    <li className="flex justify-between items-center bg-white p-3 rounded-md shadow-sm border-l-4 transition-all duration-300 ease-in-out
      border-blue-500 hover:border-blue-600">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={task.status}
          onChange={handleToggleStatus}
          className="w-5 h-5 accent-blue-500 cursor-pointer"
        />
        <span className={`${task.status ? "line-through text-gray-500" : "text-gray-900"} font-medium`}>
          {task.title}
        </span>
      </div>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  );
}
