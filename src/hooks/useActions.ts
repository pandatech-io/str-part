import { useQuery } from "@tanstack/react-query";

import { useNotification } from "@/hooks/useNotification";
import { WEB_SERVICES } from "@/services";

const useActions = () => {
  const { addSuccess } = useNotification();
  const todos = useQuery(["todos"], () => WEB_SERVICES.Todo.getTodos(), {
    onSuccess: () => {
      addSuccess("Success");
    },
  });

  return {
    todos,
  };
};

export default useActions;
