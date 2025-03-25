import { useRouter } from "expo-router";
import * as Haptics from "expo-haptics";

import { useCustomForm } from "@/hooks/useCustomForm";
import { authFetcher } from "@/services/auth.adapter";
import { LoginFormData } from "@/presentation/types/LoginFormData";
import { loginSchema } from "@/presentation/schemas/loginSchema";
import { useAuth } from "@/context/AuthProvider";

interface LoginResponse {
  token: string;
}

export const useLogin = () => {
  const { login } = useAuth();
  const navigate = useRouter();

  const { control, handleSubmit, errors, isSubmitting, isDisabled } =
    useCustomForm<LoginFormData>(loginSchema);

  const handleLogin = async (payload: LoginFormData) => {
    try {
      const { token } = await authFetcher.post<LoginResponse>(
        "/auth/login-email",
        payload
      );

      if (token.length) {
        await login(token);
        navigate.push("/auth/welcome");
      } else {
        // TOdo error de autenticación (mostrar un mensaje de error.)
        console.log("Error de autenticación");
      }
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  return {
    //Props

    //Methods
    login,
    control,
    handleSubmit,
    errors,
    isSubmitting,
    isDisabled,
    handleLogin,
    navigate,
    Haptics,
  };
};
