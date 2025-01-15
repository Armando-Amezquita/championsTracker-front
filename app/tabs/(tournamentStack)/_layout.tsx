import { Stack } from "expo-router";
import { View, Text } from "react-native";

const TournamentStack = () => (
  <Stack>
    <Stack.Screen
      name='index'
      options={{
        headerShown: false,
        // title: "Selecciona el deporte que desees",
      }}
    />
    <Stack.Screen
      name='tournament/[id]'
      options={{
        headerShown: false,
        // headerTransparent: true, // Hace el header transparente
        // headerStyle: {
        //   backgroundColor: "transparent", // Fondo del encabezado
        // },
        // headerTintColor: "#FFFFFF", // Coklor del texto y los íconos
        // headerTitleStyle: {
        //   fontWeight: "bold",
        //   fontSize: 18,
        // },
        // headerBackTitle: "Atrás", // Texto del botón de volver
        // headerTitleAlign: "center", // Centrar el título
        // headerShadowVisible: false, // Elimina la sombra del encabezado
        // // headerBackTitleVisible: false, // Oculta el texto del botón de volver
        // headerTitle: "", // Opcional: elimina el título si no lo necesitas
        // header: ({ navigation }) => (
        //   <View style={{ width: 70, backgroundColor: "red", top: 100 }}>
        //     <Text>Hola mundo</Text>
        //   </View>
        // ),
      }}
    />
    <Stack.Screen
      name='player/[id]'
      options={{
        // title: "Detalles del jugador",
        // headerStyle: {
        //   backgroundColor: Colors.dark,
        // },
        // headerTintColor: Colors.primary,
        // headerBackTitle: "volver",
        // headerTitleStyle: {
        //   fontWeight: "bold",
        //   fontSize: 22,
        // },
        headerShown: false,
      }}
    />
    <Stack.Screen
      name='team/[id]'
      options={{
        headerShown: false,
      }}
    />
  </Stack>
);

export default TournamentStack;
