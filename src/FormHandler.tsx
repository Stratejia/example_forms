import * as React from 'react';
import {useForm} from "react-hook-form";
import {TextField} from "./components/TextField";
import {zodResolver} from "@hookform/resolvers/zod";
import {Performer, performerSchema} from "./schemas/performer";
import {Categories} from "./types/Category";
import {useUpdatePerformer} from "./hooks/useUpdatePerformer";
import {useGetPerformer} from "./hooks/useGetPerformer";
import {Form} from "./Form";

function FormHandler() {
  const { data, isLoading, error } = useGetPerformer();

  return (
      <div>
        {error ? (
            <span style={{ color: 'red' }}>{JSON.stringify(error)}</span>
        ) : (isLoading || !data ? (
            <span style={{ color: 'blue' }}>Loading</span>
        ) : (
            <Form defaultValues={data} />
        ))}
      </div>
  )
}

export { FormHandler };
