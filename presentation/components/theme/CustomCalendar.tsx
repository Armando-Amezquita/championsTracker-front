import { useState } from "react";
import { TextInput, Pressable, Platform, StyleSheet, View, Text } from "react-native";
import Calendar, { DateTimePickerEvent } from "@react-native-community/datetimepicker";

import { Colors, ErrorMessage, Fonts, Padding, Radius } from "@/presentation/styles/global-styles";
import { ChampionIcon } from "@/presentation/plugins/Icon";

interface Props {
  label?: string;
  selectedDate?: Date;
  onChangeDate: (date: Date) => void;
  error?: string;
}

export const CustomCalendar = ({ label = "", selectedDate, onChangeDate, error }: Props) => {
  const [showPicker, setShowPicker] = useState(false);
  const [tempDate, setTempDate] = useState(selectedDate ?? new Date());

  const toggleDatePicker = () => setShowPicker(!showPicker);

  const handleDateChange = (event: DateTimePickerEvent, date?: Date) => {
    const isAndroid = Platform.OS === "android";

    if (isAndroid) {
      if (event.type === "set" && date) {
        onChangeDate(date);
      }
      toggleDatePicker();
    } else if (date) {
      setTempDate(date);
    }
  };

  const confirmIosDate = () => {
    onChangeDate(tempDate);
    toggleDatePicker();
  };

  const formatDate = (date?: Date): string => {
    if (!(date instanceof Date) || isNaN(date.getTime())) return "";
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <View>
      <Text style={styles.customCalendarLabel}>{label}</Text>
      <Pressable style={styles.customCalendarPressable} onPress={toggleDatePicker}>
        <TextInput
          style={styles.customCalendarInput}
          placeholder='31/12/2000'
          value={formatDate(selectedDate)}
          editable={false}
          onPressIn={toggleDatePicker}
          placeholderTextColor={Colors.light}
        />
        <ChampionIcon name='calendar-number-outline' />
      </Pressable>
      {error && <Text style={ErrorMessage}>{error}</Text>}

      {showPicker && (
        <View style={styles.containerCalendar}>
          <Calendar
            mode='date'
            display='spinner'
            value={Platform.OS === "ios" ? tempDate : selectedDate ?? new Date()}
            onChange={handleDateChange}
            style={styles.calendar}
          />
          {Platform.OS === "ios" && (
            <View style={styles.calendarActionsContainer}>
              <Pressable
                onPress={confirmIosDate}
                style={({ pressed }) => [
                  {
                    borderColor: pressed ? Colors.primaryDark : Colors.primary,
                  },
                  styles.calendarConfirm,
                ]}>
                <Text style={{ color: Colors.primary, fontSize: Fonts.normal }}>Seleccionar</Text>
              </Pressable>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  customCalendarPressable: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: Radius.normal,
    padding: Platform.OS === "ios" ? Padding.medium : Padding.normal,
    gap: 10,
    borderColor: Colors.gray,
    borderWidth: 1,
  },
  customCalendarLabel: {
    color: Colors.light,
    fontSize: Fonts.normal,
    fontWeight: "bold",
    marginBottom: 5,
  },
  customCalendarInput: {
    flex: 1,
    borderRadius: Radius.normal,
    color: Colors.light,
    fontSize: Fonts.normal,
  },

  containerCalendar: {
    justifyContent: "center",
    alignItems: "center",
  },
  calendar: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginVertical: 10,
    height: 300,
  },
  calendarActionsContainer: {
    flexDirection: "row",
  },
  calendarConfirm: {
    borderWidth: 1,
    padding: Padding.normal,
    borderRadius: Radius.normal,
  },
});
