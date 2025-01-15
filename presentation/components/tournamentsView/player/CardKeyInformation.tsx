import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/presentation/styles/global-styles";

interface Props {
  label: string;
  value: string;
}

export const CardKeyInformation = ({ label = "", value = "" }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    height: 100,
    width: 100,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: Colors.light,
    fontSize: 20,
  },
  value: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 30,
  },
});
