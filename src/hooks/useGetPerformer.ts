import {useQuery} from "@tanstack/react-query";
import {getPerformer} from "../api/getPerformer";

const performerKey = 'performer';

function useGetPerformer() {
  return useQuery([performerKey], getPerformer);
}

export { useGetPerformer, performerKey };