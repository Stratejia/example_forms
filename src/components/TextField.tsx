import * as React from 'react';
import { type FieldPath, type FieldValues, useController, type UseControllerProps } from 'react-hook-form';

type TextFieldProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = React.HTMLProps<HTMLInputElement> & UseControllerProps<TFieldValues, TName>;

function TextField<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ control, name, ...props }: TextFieldProps<TFieldValues, TName>) {
  const {
    field,
    fieldState: { isTouched, error },
  } = useController({ control, name });
  const errorMessage = isTouched && error ? error.message : undefined;

  return (
    <>
      <input {...field} {...props} />
      {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
    </>
  )
}

export { TextField };