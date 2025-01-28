import api from "@/utils/api";

export const deleteTask = async (taskId: number) => {
  return await api.delete(`/tasks/${taskId}`);
};
