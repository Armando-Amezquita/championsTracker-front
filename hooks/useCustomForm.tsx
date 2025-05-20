import { useForm, FieldValues, FieldErrors } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const useCustomForm = <T extends FieldValues>(schema: yup.ObjectSchema<T>) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
    trigger,
  } = useForm<T>({
    resolver: yupResolver(schema) as any,
    mode: "onChange",
  });

  const isDisabled = Object.keys(errors).length > 0 || isSubmitting;

  return {
    control,
    handleSubmit,
    errors: errors as FieldErrors<T>,
    isSubmitting,
    isDisabled,
    watch,
    reset,
    trigger,
  };
};
