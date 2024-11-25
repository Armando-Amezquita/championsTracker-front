import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CustomInput } from "@/presentation/components/theme/CustomInput";
import { CustomButton } from "@/presentation/components/theme/CustomButton";
import { CustomLink } from "@/presentation/components/theme/CustomLink";
import { CustomFormView } from "@/presentation/components/theme/CustomFormView";
import { Colors, Fonts } from "@/presentation/components/styles/global-styles";

const Login = () => {
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
          onPress={() => console.log("clic en login")}
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
