import { useState, useRef } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Fonts } from "@/presentation/styles/global-styles";

interface Props {
  title?: string;
  label: string;
  options: Option[];
  onSelectOption: (option: Option) => void;
  selectedOption?: Option;
}

interface Option {
  id: string;
  label: string;
}

export const CustomSelectOptions = ({
  title,
  label,
  options,
  onSelectOption,
  selectedOption,
}: Props) => {
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const animation = useRef(new Animated.Value(0)).current;
  const { width } = useWindowDimensions();

  const toggleOptions = () => {
    Animated.timing(animation, {
      toValue: openOptions ? 0 : options.length * 55,
      duration: 200,
      useNativeDriver: false,
    }).start();

    setOpenOptions(!openOptions);
  };

  return (
    <View style={{ width: width * 0.9 }}>
      <Text style={styles.customSelectTitle}>{title}</Text>
      <Pressable
        onPress={toggleOptions}
        style={({ pressed }) => [
          styles.optionToggleButton,
          { opacity: pressed ? 0.6 : 1 },
        ]}>
        <Text
          style={{
            color: selectedOption ? Colors.primary : Colors.lightDark,
            fontSize: Fonts.normal,
          }}>
          {selectedOption ? selectedOption.label : label}
        </Text>
        <Ionicons
          name={openOptions ? "chevron-up-outline" : "chevron-down-outline"}
          size={24}
          color={selectedOption ? Colors.primary : Colors.lightDark}
        />
      </Pressable>
      <Animated.View
        style={[
          styles.animationContainer,
          { height: animation },
          { zIndex: openOptions ? 9999 : 0 },
        ]}>
        {options.map((option, index) => (
          <Pressable
            onPress={() => {
              onSelectOption(option);
              toggleOptions();
            }}
            key={index}
            style={({ pressed }) => [
              styles.option,
              index !== options.length - 1 && styles.withBorder,
              { opacity: pressed ? 0.6 : 1 },
            ]}>
            <Text style={styles.optionText}>{option.label}</Text>
          </Pressable>
        ))}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  optionToggleButton: {
    borderColor: Colors.gray,
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  customSelectTitle: {
    color: Colors.light,
    fontSize: Fonts.normal,
    fontWeight: "bold",
    marginBottom: 5,
  },
  animationContainer: {
    overflow: "hidden",
    width: "100%",
    borderRadius: 10,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.grayDark,
    backgroundColor: Colors.backgroundLight,
    position: "absolute",
    top: "100%",
  },
  option: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    height: 55,
  },
  optionText: {
    color: Colors.light,
    fontSize: Fonts.small,
  },
  withBorder: {
    borderBottomWidth: 1,
    borderColor: "gray",
  },
});
