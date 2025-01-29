import api from '@/utils/api';

export type Task = {
  id: number;
  title: string;
  status: boolean;
  userId: number;
  createdAt: string;
  updatedAt: string;
};

// Define the getTasks function
export const getTasks = async (): Promise<Task[]> => {
  const { data } = await api.get<Task[]>('/tasks'); // Specify the type of the response
  return data;
};
