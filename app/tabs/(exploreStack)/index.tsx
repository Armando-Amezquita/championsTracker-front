import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import React, { ComponentProps } from "react";
import { Colors, Fonts, Radius } from "@/presentation/styles/global-styles";
import { MainContainerView } from "@/presentation/components/theme/MainContainerView";
import { ChampionIcon } from "@/presentation/plugins/Icon";
import { Ionicons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import { useAuth } from "@/context/AuthProvider";
("@/app/auth/login");

const IndexTournament = () => {
  const { logout } = useAuth();
  const handleSignUp = async () => {
    await logout();
    router.replace("/auth/login");
  };

  const sportsData = [
    { id: "1", name: "Fútbol", icon: "football-outline", navigateTo: "soccer" },
    { id: "2", name: "Baloncesto", icon: "basketball" },
    { id: "3", name: "Tenis", icon: "tennisball-outline" },
    { id: "4", name: "Béisbol", icon: "baseball" },
    { id: "5", name: "Natación", icon: "swim" },
    { id: "6", name: "Ciclismo", icon: "bicycle-outline" },
  ];
  return (
    <MainContainerView>
      <View style={{ flex: 1, alignItems: "center", padding: 10 }}>
        <Text style={styles.titleTournament}>
          ¿Qué deporte te gustaría ver hoy?
        </Text>
        <Text onPress={handleSignUp} style={{ color: "white" }}>
          Salir
        </Text>

        <View>
          <FlatList
            data={sportsData}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Test label={item.name} icon={item.icon} />
            )}
            columnWrapperStyle={styles.columnWrapper}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[styles.contentContainer]}
          />
        </View>
      </View>
    </MainContainerView>
  );
};

export default IndexTournament;

const styles = StyleSheet.create({
  titleTournament: {
    textAlign: "center",
    fontSize: Fonts.extraLarge,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 20,
  },
  columnWrapper: {
    gap: 20,
    marginBottom: 20,
  },
  contentContainer: {
    justifyContent: "center",
    flex: 1 * 0.8,
  },
});

interface Props {
  label: string;
  icon: ComponentProps<typeof Ionicons>["name"];
}

export const Test = ({ label, icon }: Props) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={{
        borderWidth: 1,
        borderColor: Colors.primary,
        padding: 10,
        height: 150,
        width: 150,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Radius.normal,
        gap: 10,
      }}
      onPress={() => navigation.navigate("soccer/index")}>
      <Text style={{ color: Colors.light, fontSize: Fonts.normal }}>
        {label}
      </Text>
      <ChampionIcon name={icon} size={40} />
    </Pressable>
  );
};
