import { Tabs, useRouter } from "expo-router";
import { ChampionIcon } from "@/presentation/plugins/Icon";
import { Colors, Fonts } from "@/presentation/styles/global-styles";
import { ActivityIndicator, Platform, View } from "react-native";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthProvider";

interface ItemRoute {
  name: string;
  title: string;
  icon:
    | "home-outline"
    | "notifications-outline"
    | "football-outline"
    | "grid-outline"
    | "calendar-outline";
}

const ListItemsRoutes: ItemRoute[] = [
  { name: "dashboard/index", title: "Noticias", icon: "home-outline" },
  { name: "tournament/index", title: "Torneos", icon: "football-outline" },
  { name: "calendar/index", title: "Calendario", icon: "calendar-outline" },
  {
    name: "notifications/index",
    title: "Notificaciones",
    icon: "notifications-outline",
  },
  { name: "explore/index", title: "Explorar", icon: "grid-outline" },
];

export default function TabLayout() {
  const { userToken, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!userToken) {
        router.replace("/auth/login");
      }
    }
  }, [userToken, loading]);

  if (loading) {
    // Muestra un indicador de carga mientras se verifica la autenticación
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size='large' color={Colors.primary} />
      </View>
    );
  }

  if (!userToken) {
    // No renderiza nada si no está autenticado (la redirección se encarga)
    return null;
  }

  return (
    <Tabs
      initialRouteName='dashboard/index'
      screenOptions={{
        headerStyle: { backgroundColor: Colors.dark },
        headerTitleStyle: {
          color: Colors.primary,
          fontWeight: "bold",
          fontSize: Fonts.large,
        },
        tabBarActiveTintColor: Colors.primary,
        // headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.dark,
          height: Platform.OS === "android" ? 65 : 80,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        // tabBarActiveBackgroundColor: Colors.primary,
      }}>
      <Tabs.Screen
        name='dashboard/index'
        options={{
          title: `Noticias`,
          tabBarIcon: ({ color }) => (
            <ChampionIcon size={28} name='home-outline' color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='(tournamentStack)'
        options={{
          headerShown: false,
          title: `Torneos`,
          tabBarIcon: ({ color }) => (
            <ChampionIcon size={28} name='football-outline' color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='calendar/index'
        options={{
          title: `Calendario`,
          tabBarIcon: ({ color }) => (
            <ChampionIcon size={28} name='calendar-outline' color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='notifications/index'
        options={{
          title: `Notificaciones`,
          tabBarIcon: ({ color }) => (
            <ChampionIcon
              size={28}
              name='notifications-outline'
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name='(exploreStack)'
        options={{
          headerShown: false,
          title: `Explorar`,
          tabBarIcon: ({ color }) => (
            <ChampionIcon size={28} name='grid-outline' color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

{
  /* {ListItemsRoutes.map((itemMenu) => (
        <Tabs.Screen
          key={itemMenu.name}
          name={itemMenu.name}
          options={{
            title: `${itemMenu.title}`,
            tabBarIcon: ({ color }) => (
              <ChampionIcon size={28} name={itemMenu.icon} color={color} />
            ),
          }}
        />
      ))} */
}
