import { View, Text, StyleSheet } from "react-native";

import { CustomInput } from "@/presentation/components/theme/CustomInput";
import { CustomButton } from "@/presentation/components/theme/CustomButton";
import { useSignUp } from "@/presentation/hooks/auth/signup/useSignUp";
import { CustomFormView } from "@/presentation/components/theme/CustomFormView";
import { Colors, Fonts } from "@/presentation/styles/global-styles";
import { TermsAndConditions } from "@/presentation/components/TermsAndConditions/TermsAndConditions";

const SingUp = () => {
  const {
    //Props
    top,

    // //Methods
    control,
    handleSubmit,
    errors,
    isSubmitting,
    isDisabled,
    handleTermsClick,
    Haptics,
    handleSignUp,
  } = useSignUp();

  return (
    <CustomFormView>
      <View
        style={[
          styles.view,
          {
            paddingTop: top + 10,
          },
        ]}>
        <Text style={styles.title}> Crear cuenta</Text>

        <View style={styles.containerInformation}>
          <CustomInput
            name='email'
            control={control}
            placeholder='ejemplo@google.com'
            label='Correo electrónico'
            iconRight='mail-outline'
            keyboardType='email-address'
            errorMessage={errors.email?.message}
          />
          <CustomInput
            name='username'
            control={control}
            placeholder='Sam Smith'
            label='Nombre de usuario'
            iconRight='person-outline'
            keyboardType='name-phone-pad'
            errorMessage={errors.username?.message}
          />

          <CustomInput
            name='password'
            control={control}
            placeholder='*********'
            label='Contraseña'
            iconRight='eye-off-outline'
            keyboardType='visible-password'
            secureTextEntry={true}
            errorMessage={errors.password?.message}
          />

          <CustomInput
            name='confirmPassword'
            control={control}
            placeholder='*********'
            label='Repertir contraseña'
            iconRight='eye-off-outline'
            keyboardType='default'
            secureTextEntry={true}
            errorMessage={errors.confirmPassword?.message}
          />
          <TermsAndConditions
            control={control}
            Haptics={Haptics}
            handleTermsClick={handleTermsClick}
            errors={errors}
          />

          <CustomButton
            label={isSubmitting ? "Ingresando..." : "Registrar"}
            onPress={handleSubmit(handleSignUp)}
            icon='football-outline'
            disabled={isDisabled || isSubmitting}
          />
        </View>
      </View>
    </CustomFormView>
  );
};

export default SingUp;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "space-evenly",
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

  containerInformation: {
    display: "flex",
    gap: 25,
    width: "100%",
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
