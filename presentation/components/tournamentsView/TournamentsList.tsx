import { View, FlatList } from "react-native";
import { TournamentTeamItem } from "./TournamentTeamItem";
import logo from "../../../assets/icons/tournament.png";
import { router } from "expo-router";

const tournaments = [
  { id: "1", icon: logo, label: "torneo Espectacular de la casa" },
  { id: "2", icon: logo, label: "torneo 2" },
  { id: "3", icon: logo, label: "torneo 3" },
  { id: "4", icon: logo, label: "torneo 4" },
  { id: "5", icon: logo, label: "torneo 5" },
];

const TournamentsList = () => {
  return (
    <View style={{ paddingBottom: 150 }}>
      <FlatList
        data={tournaments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TournamentTeamItem
            label={item.label}
            img={item.icon}
            onPressCard={() => router.push(`/tabs/tournament/${item.id}`)}
          />
        )}
        contentContainerStyle={{
          gap: 20,
          paddingBottom: 70,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TournamentsList;
