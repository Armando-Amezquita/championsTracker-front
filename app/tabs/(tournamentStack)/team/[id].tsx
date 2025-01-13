import { useState } from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
  Pressable,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { router, useLocalSearchParams } from "expo-router";
import { Colors, Fonts } from "@/presentation/styles/global-styles";
import Players from "@/presentation/components/tournamentsView/players/Players";
import { Test } from "./Test";
import { ChampionIcon } from "@/presentation/plugins/Icon";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Teams = () => {
  const { id } = useLocalSearchParams();
  const { height } = useWindowDimensions();
  const { top } = useSafeAreaInsets();
  const [selected, setSelected] = useState("1");
  const menuItems = [
    { id: "1", label: "Descripción", icon: "bookmark-outline" },
    { id: "2", label: "Jugadores", icon: "accessibility-outline" },
    { id: "3", label: "Títulos", icon: "flash-outline" },
    { id: "4", label: "Formacion", icon: "shirt-outline" },
  ];

  const handleSaveFavorite = () => {
    console.log("favorite");
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.dark }}>
      <View>
        <Image
          source={require("./trofeo.jpg")}
          style={[
            styles.portrait,
            {
              height: height * 0.5,
            },
          ]}
        />
        <View
          style={[
            {
              height: height * 0.5,
            },
            styles.overlay,
          ]}
        />
        <Pressable
          onPress={handleSaveFavorite}
          style={[
            styles.like,
            {
              top: top,
            },
          ]}>
          <ChampionIcon name={"heart-outline"} size={35} color={Colors.light} />
        </Pressable>

        <Pressable
          onPress={handleGoBack}
          style={[
            styles.back,
            {
              top: top,
            },
          ]}>
          <ChampionIcon
            name={"chevron-back-outline"}
            size={35}
            color={Colors.light}
          />
        </Pressable>

        <Text
          style={{
            color: Colors.light,
            fontWeight: "bold",
            top: 260,
            fontSize: 45,
            position: "absolute",
            padding: 20,
          }}>
          Brasilia
        </Text>

        {/* Logo equipo */}
        <View style={{ alignItems: "center", top: "-9%", zIndex: 2 }}>
          <Image
            source={require("../../../../assets/icons/tournament.png")}
            style={{ width: 150, height: 100 }}
          />
        </View>
        {/* Menu */}
        <Test
          items={menuItems}
          handleChangeValue={(value: string) => setSelected(value)}
        />

        <View style={{ paddingHorizontal: 20 }}>
          {selected === "1" && (
            <Text style={{ color: "white", fontSize: Fonts.normal }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              asperiores itaque illum unde voluptas. Qui corporis molestias
              reprehenderit quod architecto. Maiores harum dolorem earum placeat
              molestias quos, qui reiciendis unde.
            </Text>
          )}
          {selected === "2" && <Players />}
        </View>
      </View>
    </ScrollView>
  );
};

export default Teams;

const styles = StyleSheet.create({
  portrait: {
    width: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  like: {
    position: "absolute",
    right: 20,
    zIndex: 10,
    elevation: 10,
  },

  back: {
    position: "absolute",
    left: 20,
    zIndex: 10,
    elevation: 10,
  },
});
