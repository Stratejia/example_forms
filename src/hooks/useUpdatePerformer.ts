import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {updatePerformer} from "../api/updatePerformer";
import {performerKey} from "./useGetPerformer";

function useUpdatePerformer() {
  const queryClient = useQueryClient();

  return useMutation(updatePerformer, {
    onSuccess: (data, input) => {
      console.log('Mutation success!', data);
      return queryClient.setQueriesData([performerKey], input);
    },
    onError: error => console.error('Mutation error!', error),
  });
}

export { useUpdatePerformer };