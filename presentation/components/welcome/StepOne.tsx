import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { Colors, Fonts } from "@/presentation/styles/global-styles";
import { CustomSelectOptions } from "../theme/CustomSelectOptions";
import { useState } from "react";
import { CustomInput } from "../theme/CustomInput";
import { CustomCalendar } from "../theme/CustomCalendar";

interface Option {
  id: string;
  label: string;
}

export const StepOne = () => {
  const { width } = useWindowDimensions();

  const options = [
    { label: "Tarjeta de identidad", id: "1" },
    { label: "Cédula de ciudadanía", id: "2" },
    { label: "Cédula de extranjería", id: "3" },
  ];

  const [selectedOption, setSelectedOption] = useState<Option | undefined>(
    undefined
  );
  const [documentNumber, setDocumentNumber] = useState<string>("");

  const toggleSelectOption = (option: any) => {
    setSelectedOption(option);
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <ScrollView style={[styles.stepOneContainer, { width }]}>
      <Text style={styles.stepOneTitle}>¡Estamos casi listos!</Text>
      <Text style={styles.stepOneSubtitle}>
        Completa estos datos para avanzar al siguiente paso.
      </Text>

      <View style={styles.stepOneContent}>
        <CustomSelectOptions
          title='Selecciona tu tipo de documento'
          label='Tipo de documento'
          options={options}
          onSelectOption={toggleSelectOption}
          selectedOption={selectedOption}
        />

        <CustomInput
          label='Número de documento'
          value={documentNumber}
          onChangeText={(value) => setDocumentNumber(value)}
          placeholder='Ejemplo: 1234567890'
          keyboardType='phone-pad'
        />

        <View style={styles.divider} />

        <CustomCalendar
          label='Fecha de nacimiento'
          selectedDate={selectedDate}
          onChangeDate={handleDateChange}
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
});
