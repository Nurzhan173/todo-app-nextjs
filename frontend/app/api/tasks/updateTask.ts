import api from '@/utils/api';

// Update a task
export const updateTask = async ({
  id,
  status,
}: {
  id: number;
  status: boolean;
}) => {
  const { data } = await api.put(`/tasks/${id}?status=${status}`);
  return data;
};
