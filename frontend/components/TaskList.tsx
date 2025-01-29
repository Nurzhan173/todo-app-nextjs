'use client';

import TaskItem from './TaskItem';

export default function TaskList({ tasks }: { tasks: any[] }) {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-4">No tasks added yet.</p>
    );
  }

  return (
    <ul className="space-y-3 mt-4">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
