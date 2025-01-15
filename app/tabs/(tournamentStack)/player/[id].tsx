import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Colors, Fonts } from "@/presentation/styles/global-styles";
import { ChampionIcon } from "@/presentation/plugins/Icon";
import { CardKeyInformation } from "@/presentation/components/tournamentsView/player/CardKeyInformation";
import { InformationPanel } from "@/presentation/components/tournamentsView/player/InformationPanel";
import { InformationDetails } from "@/presentation/components/tournamentsView/player/InformationDetails";

const PlayerId = () => {
  const { top } = useSafeAreaInsets();
  const { height: screenHeight } = Dimensions.get("window");

  const handleGoBack = () => {
    router.back();
  };

  const name = "Cristiano Ronaldo".slice(0, 25);

  const keyInformation = [
    { label: "Edad", value: "38" },
    { label: "Goles", value: "1000" },
    { label: "Juegos", value: "769" },
  ];

  const listInformationDetails = [
    { value: 8, label: "Faltas consedidas", icon: "", colorIcon: "" },
    { value: 18, label: "Faltas a favor", icon: "", colorIcon: "" },
    {
      value: 2,
      label: "Tarjeta amarillas",
      icon: "tablet-portrait",
      colorIcon: "yellow",
    },
    {
      value: 38,
      label: "Tarjetas rojas",
      icon: "tablet-portrait",
      colorIcon: "red",
    },
  ];

  return (
    <ScrollView
      style={{
        backgroundColor: Colors.dark,
        flex: 1,
        paddingVertical: top,
      }}>
      <View
        style={{
          flexDirection: "row",
          gap: 20,
          justifyContent: "flex-start",
          paddingHorizontal: 10,
        }}>
        <Pressable onPress={handleGoBack}>
          <ChampionIcon
            name={"chevron-back-outline"}
            size={35}
            color={Colors.gray}
          />
        </Pressable>

        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: Colors.light,
            marginBottom: 20,
          }}>
          Detalles del jugador
        </Text>
      </View>

      <ImageBackground
        source={require("./ronaldo.jpg")}
        style={styles.background}>
        <View style={styles.overlay} />
        <Text
          style={{
            // borderWidth: 1,
            borderRadius: 100,
            // padding: 10,
            textAlign: "center",
            // width: 50,
            // height: 50,
            width: 100,
            marginTop: 10,
            borderColor: Colors.light,
            fontSize: 50,
            fontWeight: "bold",
            color: Colors.light,
          }}>
          07
        </Text>
        <Text
          style={{
            position: "absolute",
            // bottom: 10,
            fontSize: 24,
            fontWeight: "bold",
            color: Colors.light,
            transform: [{ rotate: "-90deg" }],
            bottom: (screenHeight * 0.4) / 4,
            right: -50,
          }}>
          {name}
        </Text>
      </ImageBackground>

      {/* Key Information */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: 20,
          width: "90%",
          marginHorizontal: "auto",
        }}>
        {keyInformation.map((key) => (
          <CardKeyInformation
            key={key.label}
            label={key.label}
            value={key.value}
          />
        ))}
      </View>

      {/* Details information */}
      <View style={{ gap: 20 }}>
        <InformationPanel title='Disciplina'>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            {listInformationDetails.map((info) => (
              <InformationDetails
                key={info.label}
                value={info.value}
                label={info.label}
                icon={info.icon}
                colorIcon={info.colorIcon}
              />
            ))}
          </View>
        </InformationPanel>
        <InformationPanel title='Titulos obtenidos'></InformationPanel>
        <InformationPanel title='Equipos en los que participa'>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 10,
            }}>
            <Pressable
              onPress={() => router.push(`/tabs/team/${1}`)}
              style={{ alignItems: "center" }}>
              <Image
                source={require("../../../../assets/icons/tournament.png")}
                style={{ width: 150, height: 100 }}
              />
              <Text style={{ color: Colors.primary, fontSize: 20 }}>
                Brasilia
              </Text>
            </Pressable>
            <Pressable
              onPress={() => router.push(`/tabs/team/${1}`)}
              style={{ alignItems: "center" }}>
              <Image
                source={require("../../../../assets/icons/tournament.png")}
                style={{ width: 150, height: 100 }}
              />
              <Text style={{ color: Colors.primary, fontSize: 20 }}>
                Curitiva
              </Text>
            </Pressable>
          </View>
        </InformationPanel>
      </View>
    </ScrollView>
  );
};

export default PlayerId;

const styles = StyleSheet.create({
  contentOptions: {
    width: "100%",
    marginHorizontal: "auto",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  optionsTitle: {
    fontSize: Fonts.large,
    marginRight: 20,
  },
  portrait: {
    width: "100%",
    height: 400,
  },
  background: {
    width: "100%",
    height: 500,
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    opacity: 0.8,
  },
});
