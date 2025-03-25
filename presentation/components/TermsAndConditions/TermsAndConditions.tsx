import React, { FC } from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import { Controller, Control, FieldErrors } from "react-hook-form";
import { MyCheckbox } from "@/presentation/components/theme/CustomCheckbox";
import { SignUpFormData } from "@/presentation/types/SignUpData";
import { Colors, Fonts } from "@/presentation/styles/global-styles";

interface Props {
  control: Control<SignUpFormData>;
  Haptics: any;
  handleTermsClick: () => void;
  errors: FieldErrors<SignUpFormData>;
}

export const TermsAndConditions = ({
  control,
  Haptics,
  handleTermsClick,
  errors,
}: Props) => (
  <>
    <View style={styles.terms}>
      <View style={styles.termsTextContainer}>
        <Text style={styles.termText}>Acepto los</Text>
        <Pressable onPress={handleTermsClick}>
          <Text style={styles.termsLink}>términos y condiciones</Text>
        </Pressable>
      </View>

      <Controller
        control={control}
        name='isChecked'
        defaultValue={false}
        render={({ field: { onChange, value } }) => (
          <MyCheckbox
            onChange={() => {
              Haptics.selectionAsync();
              onChange(!value);
            }}
            checked={value ?? false}
          />
        )}
      />
    </View>

    {errors?.isChecked && (
      <Text style={styles.errorText}>{errors.isChecked.message}</Text>
    )}
  </>
);
const styles = StyleSheet.create({
  terms: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 15,
    zIndex: 2,
  },

  termsTextContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  termText: {
    fontSize: Fonts.small + 2,
    color: Colors.light,
  },

  termsLink: {
    fontSize: Fonts.small + 2,
    color: Colors.primary,
    textDecorationLine: "underline",
  },
  errorText: {
    color: "#E97451",
    fontSize: Fonts.small,
    marginTop: 2,
  },
});
