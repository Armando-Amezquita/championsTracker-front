import { View, Text, StyleSheet, Pressable } from "react-native";
import { CustomInput } from "@/presentation/components/theme/CustomInput";
import { CustomButton } from "@/presentation/components/theme/CustomButton";
import { MyCheckbox } from "@/presentation/components/theme/CustomCheckbox";
import { useSignUp } from "@/presentation/hooks/auth/signup/useSignUp";
import { CustomFormView } from "@/presentation/components/theme/CustomFormView";
import { Colors, Fonts } from "@/presentation/styles/global-styles";

const SingUp = () => {
  const {
    //Props
    top,
    form,

    //Methods
    handleTermsClick,
    handleModifyForm,
    handleSubmit,
    Haptics,
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
            label='Correo electronico'
            placeholder='ejemplo@google.com'
            value={form.email}
            onChangeText={(value) => handleModifyForm("email", value)}
            iconRight='mail-outline'
            keyboardType='email-address'
          />
          <CustomInput
            label='Nombre de usuario'
            placeholder='Sam Smith'
            value={form.username}
            onChangeText={(value) => handleModifyForm("username", value)}
            iconRight='person-outline'
            keyboardType='email-address'
          />
          <CustomInput
            label='Contraseña'
            placeholder='*********'
            value={form.password}
            onChangeText={(value) => handleModifyForm("password", value)}
            iconRight='eye-off-outline'
            isPassword
          />
          <CustomInput
            label='Repertir contraseña'
            placeholder='*********'
            value={form.confirmPassword}
            onChangeText={(value) => handleModifyForm("confirmPassword", value)}
            iconRight='eye-off-outline'
            isPassword
          />

          <View style={[styles.terms]}>
            <View style={styles.termsTextContainer}>
              <Text style={styles.termText}>Acepto los</Text>
              <Pressable onPress={handleTermsClick}>
                <Text style={styles.termsLink}>términos y condiciones</Text>
              </Pressable>
            </View>
            <MyCheckbox
              onChange={() => {
                Haptics.selectionAsync();
                handleModifyForm("isChecked", !form.isChecked);
              }}
              checked={form.isChecked}
            />
          </View>
        </View>

        <CustomButton
          label='Registrarse'
          onPress={handleSubmit}
          icon='football-outline'
        />
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

  terms: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 15,
    zIndex: 2,
  },

  termsTextContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  termText: {
    fontSize: Fonts.small + 2,
    color: Colors.light,
  },

  termsLink: {
    fontSize: Fonts.small + 2,
    color: Colors.primary,
    textDecorationLine: "underline",
  },
});
