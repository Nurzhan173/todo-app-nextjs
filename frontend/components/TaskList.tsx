"use client";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks }: { tasks: any[] }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
