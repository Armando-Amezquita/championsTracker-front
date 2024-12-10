import { Tabs } from "expo-router";
import { ChampionIcon } from "@/presentation/plugins/Icon";
import { Colors, Fonts } from "@/presentation/styles/global-styles";
import { Platform } from "react-native";

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
  return (
    <Tabs
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
      {ListItemsRoutes.map((itemMenu) => (
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
      ))}
    </Tabs>
  );
}
