import {useMutation, useQueryClient} from "@tanstack/react-query";
import {updateTask} from "@/app/api/tasks/updateTask";

export function useUpdateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"], // Refetch tasks after updating
      });
    },
  });
}
