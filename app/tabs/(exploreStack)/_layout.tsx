import { Stack } from "expo-router";
import { Colors } from "@/presentation/styles/global-styles";

const TournamentStack = () => {
  return (
    <Stack
      screenOptions={{
        animation: "fade",
        headerShown: true,
        headerStyle: {
          backgroundColor: Colors.dark,
        },
        headerTintColor: Colors.primary,
        headerTitleStyle: { fontSize: 25, fontWeight: "bold" },
      }}>
      <Stack.Screen
        name='index'
        options={{
          headerShown: false,
          title: "Selecciona el deporte que desees",
        }}
      />
      <Stack.Screen
        name='backelball/index'
        options={{
          title: "baskes",
        }}
      />
      <Stack.Screen
        name='soccer/index'
        options={{
          title: "futbol",
        }}
      />
    </Stack>
  );
};

export default TournamentStack;
