import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTask } from '@/app/api/tasks/deleteTask';

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['tasks'],
      });
    },
  });
}
