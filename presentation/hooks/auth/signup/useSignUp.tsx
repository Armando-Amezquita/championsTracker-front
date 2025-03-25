import { Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

import { useCustomForm } from "@/hooks/useCustomForm";
import { SignUpFormData } from "@/presentation/types/SignUpData";
import { signUpSchema } from "@/presentation/schemas/signUpSchema";
import { authFetcher } from "@/services/auth.adapter";

export const useSignUp = () => {
  const { top } = useSafeAreaInsets();
  const { control, handleSubmit, errors, isSubmitting, isDisabled } =
    useCustomForm<SignUpFormData>(signUpSchema);

  const handleSignUp = async (formData: SignUpFormData) => {
    try {
      const { username, email, password } = formData;
      const payload = {
        username,
        email,
        password,
      };
      const response = await authFetcher.post("/auth/signup", payload);
      //Todo redirect to welcome
    } catch (error: any) {
      console.log("error :>> ", error);
    }
  };

  const handleTermsClick = () => {
    Linking.openURL("https://example.com/terms");
  };

  return {
    //Props
    top,

    //Methods
    control,
    handleSubmit,
    errors,
    isSubmitting,
    isDisabled,
    handleTermsClick,
    handleSignUp,
    Haptics,
  };
};
