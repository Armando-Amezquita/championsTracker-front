import {
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { ChampionIcon } from "@/presentation/plugins/Icon";
import { Colors } from "@/presentation/styles/global-styles";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const gameRecords = () => {
  const { top } = useSafeAreaInsets();
  const { height: screenHeight } = Dimensions.get("window");

  const handleGoBack = () => {
    router.back();
  };

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
        <Pressable onPress={() => {}}>
          <ChampionIcon
            name={"chevron-back-outline"}
            size={35}
            color={Colors.gray}
          />
        </Pressable>
      </View>

      <View
        style={{
          width: "100%",
          alignItems: "center",
          marginHorizontal: "auto",
        }}>
        <Text style={{ color: Colors.light, fontSize: 28, fontWeight: "bold" }}>
          Proximo encuentro
        </Text>

        {/* Informacion de proximo encuentro */}
        <View style={{ marginVertical: 50, alignItems: "center", gap: 20 }}>
          <Text
            style={{
              backgroundColor: Colors.primaryDark,
              fontSize: 18,
              borderRadius: 10,
              width: 200,
              textAlign: "center",
            }}>
            Nombre campeonato
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 15,
              paddingHorizontal: 20,
            }}>
            <View style={{ alignItems: "center", gap: 10 }}>
              <Image
                source={require("../../../../assets/icons/tournament.png")}
                style={{ width: 180, height: 100 }}
              />
              <Text style={{ color: Colors.primary, fontSize: 20 }}>
                Curitiva
              </Text>
            </View>
            <View style={{ alignItems: "center", gap: 5 }}>
              <Text
                style={{
                  color: Colors.primary,
                  fontSize: 20,
                  fontWeight: "bold",
                }}>
                6:00pm
              </Text>
              <Text
                style={{ fontSize: 18, color: "yellow", fontWeight: "bold" }}>
                VS
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: Colors.primary,
                }}>
                sabado 19/2025
              </Text>
              <Text style={{ color: Colors.light, fontSize: 16 }}>
                nombre de cancha
              </Text>
            </View>

            <View style={{ alignItems: "center", gap: 10 }}>
              <Image
                source={require("../../../../assets/icons/tournament.png")}
                style={{ width: 180, height: 100 }}
              />
              <Text style={{ color: Colors.primary, fontSize: 20 }}>
                Brasilia
              </Text>
            </View>
          </View>
        </View>

        {/* Timeline */}

        <Text style={{ color: Colors.light, fontSize: 24 }}>
          Últimos resultados
        </Text>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.grayDark,
            width: "100%",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            padding: 20,
            minHeight: screenHeight * 0.5,
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Colors.gray,
              flexDirection: "row",
              justifyContent: "center",
              paddingBottom: 20,
            }}>
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../../../../assets/icons/tournament.png")}
                style={{ width: 100, height: 80 }}
              />
              <Text style={{ color: Colors.primary, fontSize: 16 }}>
                Curitiva
              </Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <Text style={{ fontSize: 28, color: Colors.light }}>0</Text>
                <Text
                  style={{ fontSize: 18, color: "yellow", fontWeight: "bold" }}>
                  -
                </Text>
                <Text style={{ fontSize: 28, color: Colors.light }}>0</Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  color: Colors.primary,
                }}>
                sabado 1/2025
              </Text>
              <Text style={{ fontSize: 18, color: Colors.gray }}>
                Finalizado
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Image
                source={require("../../../../assets/icons/tournament.png")}
                style={{ width: 100, height: 80 }}
              />
              <Text style={{ color: Colors.primary, fontSize: 16 }}>
                Brasilia
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default gameRecords;

const styles = StyleSheet.create({});
