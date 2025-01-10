import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { MainContainerView } from "@/presentation/components/theme/MainContainerView";
import { Colors, Fonts } from "@/presentation/styles/global-styles";
import { CustomInput } from "@/presentation/components/theme/CustomInput";
import TournamentsList from "@/presentation/components/tournamentsView/TournamentsList";
import TeamsList from "@/presentation/components/tournamentsView/TeamsList";

const OurTournaments = () => {
  const [search, setSearch] = useState("");
  const [viewSelected, setViewSelected] = useState("viewTournaments");
  return (
    <MainContainerView>
      <View style={styles.tournaments}>
        <Text style={styles.tournamentsTitle}>
          Descubre tus equipos y torneos favoritos.
        </Text>

        <CustomInput
          iconRight='search-outline'
          value={search}
          placeholder='Buscar...'
          onChangeText={(value) => setSearch(value)}
        />

        <View style={styles.tournamentsTagsContainer}>
          <Pressable
            onPress={() => setViewSelected("viewTournaments")}
            style={[
              styles.tournamentsTags,
              {
                borderColor:
                  viewSelected === "viewTournaments"
                    ? Colors.primary
                    : Colors.gray,
              },
            ]}>
            <Text
              style={[
                styles.tournamentsTagsText,
                {
                  color:
                    viewSelected === "viewTournaments"
                      ? Colors.primary
                      : Colors.gray,
                },
              ]}>
              Mis torneos
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setViewSelected("viewTeams")}
            style={[
              styles.tournamentsTags,
              {
                borderColor:
                  viewSelected === "viewTeams" ? Colors.primary : Colors.gray,
              },
            ]}>
            <Text
              style={[
                styles.tournamentsTagsText,
                {
                  color:
                    viewSelected === "viewTeams" ? Colors.primary : Colors.gray,
                },
              ]}>
              Mis equipos
            </Text>
          </Pressable>
        </View>

        <View>
          {viewSelected === "viewTournaments" ? (
            <TournamentsList />
          ) : (
            <TeamsList />
          )}
        </View>
      </View>
    </MainContainerView>
  );
};

export default OurTournaments;

const styles = StyleSheet.create({
  tournaments: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  tournamentsTitle: {
    color: Colors.light,
    fontSize: Fonts.large,
  },
  tournamentsTagsContainer: {
    marginVertical: 20,
    marginTop: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  tournamentsTags: {
    width: "47%",
    borderBottomWidth: 1,
    paddingBottom: 20,
    alignItems: "center",
  },
  tournamentsTagsText: {
    fontSize: Fonts.normal,
  },
});
