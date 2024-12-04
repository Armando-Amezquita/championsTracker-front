import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { MainContainerView } from "@/presentation/components/theme/MainContainerView";
import { CustomButton } from "@/presentation/components/theme/CustomButton";
import { ChampionIcon } from "@/presentation/plugins/Icon";
import { Colors } from "@/presentation/styles/global-styles";

const AuthLayout = () => {
  const navigation = useRouter();

  return (
    <MainContainerView>
      <View style={styles.welcome}>
        <View style={styles.welcomeHeader}>
          <Text style={styles.welcomeBrand}>ChampionsTracker</Text>
          <ChampionIcon name='star-half-outline' size={200} />
        </View>
        <View style={styles.welcomeActions}>
          <CustomButton
            label='Ingresar'
            onPress={() => navigation.push("/auth/login")}
            styleProp={styles.welcomeButtons}
          />
          <CustomButton
            label='Registrarse'
            onPress={() => navigation.push("/auth/singup")}
            styleProp={[styles.welcomeButtons, styles.welcomeRegister]}
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
  welcomeHeader: {
    alignItems: "center",
    width: "100%",
    gap: 40,
  },
  welcomeBrand: {
    fontSize: 40,
    color: Colors.primary,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  welcomeActions: {
    width: "100%",
    flexDirection: "column",
    gap: 20,
  },
  welcomeRegister: {
    backgroundColor: Colors.light,
  },
  welcomeButtons: {
    height: 60,
    borderRadius: 40,
  },
});
