import * as yup from "yup";
import { errorMessages } from "../utils/errorsMessages/errorsMessages";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email(errorMessages.invalidEmail)
    .required(errorMessages.requiredField),
  password: yup
    .string()
    .min(6, errorMessages.shortPassword)
    .required(errorMessages.requiredField),
});
