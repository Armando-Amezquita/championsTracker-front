import { InferType } from "yup";
import { signUpSchema } from "@/presentation/schemas/signUpSchema";

export type SignUpFormData = InferType<typeof signUpSchema>;
