"use client";

import {useUpdateTask} from "@/hooks/useUpdateTask";
import {useDeleteTask} from "@/hooks/useDeleteTask";

export default function TaskItem({task}: { task: any }) {
  const updateTaskMutation = useUpdateTask();
  const deleteTaskMutation = useDeleteTask();

  const handleToggleStatus = () => {
    updateTaskMutation.mutate({id: task.id, status: !task.status});
  };

  const handleDelete = () => {
    deleteTaskMutation.mutate(task.id);
  };

  return (
    <li className="flex justify-between items-center p-2 border-b">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.status}
          onChange={handleToggleStatus}
          className="mr-2"
        />
        <span>{task.title}</span>
      </div>
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white p-1 rounded"
      >
        Delete
      </button>
    </li>
  );
}
