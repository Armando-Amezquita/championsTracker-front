import { useState } from "react";
import { Alert, Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

export const useSignUp = () => {
  const { top } = useSafeAreaInsets();

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    isChecked: false,
  });

  const handleModifyForm = (field: string, value: string | boolean) => {
    setForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(form.email);
  };

  const validateForm = () => {
    if (
      !form.email ||
      !form.username ||
      !form.password ||
      !form.confirmPassword ||
      !form.isChecked
    ) {
      Alert.alert("Campos incompletos", "Todos los campos deben estar llenos", [
        { text: "Entendido" },
      ]);
      return;
    }

    const emailValidated = validateEmail();
    console.log("emailValidated :>> ", emailValidated);
    if (!emailValidated) {
      Alert.alert(
        "Correo incorrecto",
        "Debe ingresar un correo valido, ejemplo: pepe@google.com",
        [{ text: "Entendido" }]
      );
      return;
    }
  };

  const handleSubmit = async () => {
    await Haptics.selectionAsync();

    validateForm();
  };

  const handleTermsClick = () => {
    Linking.openURL("https://example.com/terms");
  };

  return {
    //Props
    top,
    form,

    //Methods
    handleTermsClick,
    handleModifyForm,
    handleSubmit,
    Haptics,
  };
};
