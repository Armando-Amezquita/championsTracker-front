import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { CustomInput } from "@/presentation/components/theme/CustomInput";
import { CustomButton } from "@/presentation/components/theme/CustomButton";
import { CustomLink } from "@/presentation/components/theme/CustomLink";
import { CustomFormView } from "@/presentation/components/theme/CustomFormView";
import { Colors, Fonts } from "@/presentation/styles/global-styles";
import { useAuth } from "@/context/AuthProvider";

const Login = () => {
  const { login } = useAuth();

  const navigate = useRouter();
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (field: string, value: string) => {
    setLoginForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const handleLogin = async () => {
    // Simulación de lógica de autenticación (reemplazar con tu lógica real)
    // Aquí deberías llamar a tu API de autenticación y obtener un token
    // Esta es una SIMULACIÓN, necesitas integrarla con tu backend REAL
    const simulatedToken = "este_es_un_token_simulado"; // Reemplaza con el token real
    console.log("simulatedToken :>> ", simulatedToken);

    // Verifica si la autenticación fue exitosa (aquí siempre es exitosa en la simulación)
    if (simulatedToken.length) {
      // Llama a la función login del contexto para guardar el token y establecer al usuario como autenticado
      await login(simulatedToken);
      // Redirige a la pantalla de bienvenida
      navigate.push("/auth/welcome"); // Redirige a las tabs si la autenticación es exitosa
    } else {
      // Maneja el error de autenticación (muestra un mensaje de error, etc.)
      console.log("Error de autenticación");
      // Puedes mostrar un mensaje de error al usuario aquí
    }
  };

  return (
    <CustomFormView>
      <View style={styles.view}>
        <Ionicons
          name='american-football-outline'
          size={70}
          color={Colors.light}
        />
        <Text style={styles.title}>Bienvenid@</Text>

        <CustomInput
          placeholder='ejemplo@google.com'
          value={loginForm.username}
          onChangeText={(value) => handleChange("username", value)}
          label='Usuario o correo electronico'
          iconRight='mail-outline'
          keyboardType='email-address'
        />
        <CustomInput
          placeholder='Contraseña'
          value={loginForm.password}
          onChangeText={(value) => handleChange("password", value)}
          label='Contraseña'
          iconRight='eye-off-outline'
          isPassword
        />
        <CustomLink
          label='Recordar contraseña'
          href='/'
          style={styles.rememberPassword}
        />
        <CustomButton
          label='ingresar'
          onPress={handleLogin}
          icon='football-outline'
        />

        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>¿No tienes cuenta?</Text>
          <CustomLink label='Registrate' href='/auth/singup' />
        </View>
      </View>
    </CustomFormView>
  );
};

export default Login;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.dark,
    gap: 20,
    padding: 20,
    minHeight: "100%",
  },
  title: {
    fontSize: Fonts.extraLarge,
    fontWeight: "bold",
    color: Colors.primary,
  },
  rememberPassword: {
    width: "100%",
    textAlign: "right",
  },
  signUpContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 30,
  },
  signUpText: {
    color: Colors.light,
    fontWeight: "bold",
    fontSize: 20,
  },
});
