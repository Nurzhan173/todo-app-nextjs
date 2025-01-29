'use client';

import { useQuery } from '@tanstack/react-query';
import { getTasks, Task } from '@/app/api/tasks/getTasks';
import TaskList from '@/components/TaskList';
import TaskForm from '@/components/TaskForm';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function TasksPage() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  const {
    data: tasks,
    isLoading,
    error,
  } = useQuery<Task[]>({
    queryKey: ['tasks'],
    queryFn: getTasks,
  });

  if (isLoading) return <div>Loading tasks...</div>;
  if (error) return <div>Failed to load tasks.</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Tasks</h1>
      <TaskForm />
      <TaskList tasks={tasks || []} />
    </div>
  );
}
