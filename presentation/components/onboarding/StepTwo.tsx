import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Controller, Control, FieldErrors } from "react-hook-form";

import { MainContainerView } from "../theme/MainContainerView";
import { Colors, Fonts, Padding } from "@/presentation/styles/global-styles";
import { CustomButton } from "../theme/CustomButton";

interface StepTwpProps {
  control: Control<any>;
  errors: FieldErrors<any>;
  onValid: (isValid: boolean) => void;
}

export const StepTwo = ({ control, errors, onValid }: StepTwpProps) => {
  const [roleSelected, setRoleSelected] = useState("");

  const handleChangeRole = (role: string) => {
    setRoleSelected(role);
  };

  const listRoles = [
    { label: "Organizador", id: "1", value: "organizer" },
    { label: "Jugador", id: "2", value: "player" },
    { label: "Capitan", id: "3", value: "captain" },
    { label: "tutor", id: "4", value: "tutor" },
  ];

  return (
    <MainContainerView>
      <Text style={styles.title}>¡Vamos a elegir tu rol!</Text>
      <Text style={styles.subtitle}>Selecciona el rol que mejor describe tu participación en esta experiencia.</Text>
      <View style={styles.buttonContainer}>
        {listRoles.map((role) => (
          <CustomButton
            key={role.id}
            label={role.label}
            onPress={() => handleChangeRole(role.value)}
            stylePressable={roleSelected === role.value && styles.selectedRoleButton}
            styleText={roleSelected === role.value && styles.selectedRoleText}
          />
        ))}
      </View>
    </MainContainerView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: Fonts.extraLarge,
    color: Colors.primary,
    textAlign: "center",
    marginVertical: 20,
  },
  subtitle: {
    fontSize: Fonts.normal,
    color: Colors.light,
    textAlign: "center",
    marginBottom: 30,
  },
  buttonContainer: {
    gap: 25,
    justifyContent: "center",
    flex: 1 * 0.6,
    padding: Padding.medium,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: Colors.primary,
    alignItems: "center",
  },
  selectedRoleButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  selectedRoleText: {
    color: Colors.primary,
  },
});
