import * as React from 'react';
import {useForm} from "react-hook-form";
import {TextField} from "./components/TextField";
import {zodResolver} from "@hookform/resolvers/zod";
import {Performer, performerSchema} from "./schemas/performer";
import {Categories} from "./types/Category";
import {useUpdatePerformer} from "./hooks/useUpdatePerformer";
import {useGetPerformer} from "./hooks/useGetPerformer";

type Props = {
  readonly defaultValues: Performer;
}

function Form({ defaultValues }: Props) {
  const { mutate: updatePerformer } = useUpdatePerformer();
  const { handleSubmit, control } = useForm<Performer>({
    mode: 'onSubmit',
    resolver: zodResolver(performerSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(input => updatePerformer(input))}>
      <TextField control={control} name="name" />
      <TextField control={control} name="category" />
      <button type="submit">Submit</button>
    </form>
  )
}

export { Form };
