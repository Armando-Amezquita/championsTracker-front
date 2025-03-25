import { InferType } from "yup";
import { loginSchema } from "@/presentation/schemas/loginSchema";

export type LoginFormData = InferType<typeof loginSchema>;
