import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import { Controller, Control, FieldErrors } from "react-hook-form";

import { Colors, Fonts } from "@/presentation/styles/global-styles";
import { OnboardingForm } from "@/presentation/schemas/onBoarding";
import { CustomSelectOptions } from "../theme/CustomSelectOptions";
import { CustomInput } from "../theme/CustomInput";
import { CustomCalendar } from "../theme/CustomCalendar";

interface Option {
  id: string;
  label: string;
}

interface StepOneProps {
  control: Control<any>;
  errors: FieldErrors<any>;
}

export const StepOne = ({ control, errors }: StepOneProps) => {
  const { width } = useWindowDimensions();
  const stepOneErrors = errors?.stepOne as FieldErrors<OnboardingForm["stepOne"]>;

  const options = [
    { label: "Tarjeta de identidad", id: "1" },
    { label: "Cédula de ciudadanía", id: "2" },
    { label: "Cédula de extranjería", id: "3" },
  ];

  const handleSelectOption = (option: Option, onChange: (value: string) => void) => {
    onChange(option.label);
  };

  return (
    <ScrollView style={[styles.stepOneContainer, { width }]}>
      <Text style={styles.stepOneTitle}>¡Estamos casi listos!</Text>
      <Text style={styles.stepOneSubtitle}>Completa estos datos para avanzar al siguiente paso.</Text>

      <View style={styles.stepOneContent}>
        <Controller
          control={control}
          name='stepOne.documentType'
          render={({ field: { onChange, value } }) => (
            <CustomSelectOptions
              title='Selecciona tu tipo de documento'
              label='Tipo de documento'
              options={options}
              onSelectOption={(option) => handleSelectOption(option, onChange)}
              selectedOption={options.find((opt) => opt.label === value)}
              error={stepOneErrors?.documentType?.message}
            />
          )}
        />

        <CustomInput
          name='stepOne.documentNumber'
          control={control}
          placeholder='Ej: 1234567890'
          label='Número de documento'
          iconRight='id-card-outline'
          keyboardType='phone-pad'
          errorMessage={stepOneErrors?.documentNumber?.message}
        />

        <View style={styles.divider} />

        <Controller
          control={control}
          name='stepOne.birthDate'
          render={({ field: { onChange, value } }) => (
            <CustomCalendar label='Fecha de nacimiento' selectedDate={value} onChangeDate={onChange} error={stepOneErrors?.birthDate?.message} />
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  stepOneContainer: {
    flex: 1,
    padding: 20,
  },

  stepOneTitle: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: Fonts.extraLarge,
    color: Colors.primary,
    textAlign: "center",
  },

  stepOneSubtitle: {
    fontSize: Fonts.normal,
    color: Colors.gray,
    textAlign: "center",
    marginVertical: 20,
  },
  stepOneContent: {
    gap: 20,
    marginTop: 20,
    marginBottom: 80,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.gray,
    marginVertical: 15,
  },
  errorText: {
    color: "red",
    fontSize: Fonts.small,
    marginTop: 5,
  },
});
