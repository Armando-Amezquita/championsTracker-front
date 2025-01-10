import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { Colors } from "@/presentation/styles/global-styles";

const CalendarDates = () => {
  return (
    <Pressable style={styles.containerDate}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 15,
        }}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../../../assets/icons/tournament.png")}
            style={{ width: 150, height: 100 }}
          />
          <Text style={{ color: Colors.primary, fontSize: 20 }}>Flamenco</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 15, color: Colors.light }}>Miercoles</Text>
          <Text style={{ fontSize: 15, color: Colors.primaryDark }}>
            06:00pm
          </Text>
          <Text style={{ fontSize: 15, color: Colors.light }}>12/Oct/2025</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../../../assets/icons/tournament.png")}
            style={{ width: 150, height: 100 }}
          />
          <Text style={{ color: Colors.primary, fontSize: 20 }}>Brasilia</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CalendarDates;

const styles = StyleSheet.create({
  containerDate: {
    gap: 15,
    borderRadius: 10,
    backgroundColor: Colors.grayDark,
  },
});
