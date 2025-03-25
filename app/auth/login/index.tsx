import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { CustomInput } from "@/presentation/components/theme/CustomInput";
import { CustomButton } from "@/presentation/components/theme/CustomButton";
import { CustomLink } from "@/presentation/components/theme/CustomLink";
import { CustomFormView } from "@/presentation/components/theme/CustomFormView";
import { Colors, Fonts } from "@/presentation/styles/global-styles";
import { useLogin } from "@/presentation/hooks/auth/login/useLogin";

const Login = () => {
  const {
    // Properties
    //Methods
    control,
    handleSubmit,
    errors,
    isSubmitting,
    isDisabled,
    handleLogin,
  } = useLogin();

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
          name='email'
          control={control}
          placeholder='ejemplo@google.com'
          label='Usuario o correo electrónico'
          iconRight='mail-outline'
          keyboardType='email-address'
          errorMessage={errors.email?.message}
        />

        <CustomInput
          name='password'
          control={control}
          placeholder='Contraseña'
          label='Contraseña'
          iconRight='eye-off-outline'
          isPassword
          errorMessage={errors.password?.message}
        />

        <CustomLink
          label='Recordar contraseña'
          href='/'
          style={styles.rememberPassword}
        />

        <CustomButton
          label={isSubmitting ? "Ingresando..." : "Ingresar"}
          onPress={handleSubmit(handleLogin)}
          icon='football-outline'
          disabled={isDisabled || isSubmitting}
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
