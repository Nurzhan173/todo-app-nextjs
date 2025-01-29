import api from '@/utils/api';

export const createTask = async (title: string) => {
  const { data } = await api.post('/tasks', { title });
  return data;
};
