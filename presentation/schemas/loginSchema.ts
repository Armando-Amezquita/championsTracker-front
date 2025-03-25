import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email("Email inválido").required("El email es requerido"),
  password: yup
    .string()
    .min(7, "Mínimo 7 caracteres")
    .required("La contraseña es requerida"),
});
