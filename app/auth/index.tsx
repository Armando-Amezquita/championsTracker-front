import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { MainContainerView } from "@/presentation/components/theme/MainContainerView";
import { CustomButton } from "@/presentation/components/theme/CustomButton";
import { Colors } from "@/presentation/styles/global-styles";
import { MyLogoImage } from "@/assets/winnixLogo/winnixIso";

const AuthLayout = () => {
  const navigation = useRouter();

  return (
    <MainContainerView>
      <View style={styles.welcome}>
        <MyLogoImage size={300} />
        <View style={styles.welcomeActions}>
          <CustomButton label='Ingresar' onPress={() => navigation.push("/auth/login")} stylePressable={styles.welcomeButtons} styleText={styles.test} />
          <CustomButton
            label='Registrarse'
            onPress={() => navigation.push("/auth/singup")}
            stylePressable={[styles.welcomeButtons, styles.welcomeRegister]}
            styleText={styles.test}
          />
        </View>
      </View>
    </MainContainerView>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 20,
  },
  welcomeActions: {
    width: "100%",
    flexDirection: "column",
    gap: 20,
  },
  welcomeRegister: {
    borderColor: Colors.primary,
    backgroundColor: Colors.dark,
    borderWidth: 2,
  },
  welcomeButtons: {
    height: 60,
    borderRadius: 40,
    borderColor: Colors.primary,
    backgroundColor: Colors.dark,
    borderWidth: 2,
  },
  test: {
    color: Colors.light,
  },
});
