import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInputProps,
  StyleSheet,
  TextInput,
  KeyboardTypeOptions,
} from "react-native";
import { useRef, useState } from "react";
import { Colors, Fonts } from "@/constants/Colors";

interface Props extends TextInputProps {
  label?: string;
  iconLeft?: keyof typeof Ionicons.glyphMap;
  iconRight?: keyof typeof Ionicons.glyphMap;
  value: string;
  keyboardType?: KeyboardTypeOptions;
  isPassword?: boolean;
  onChangeText: (value: string) => void;
}

export const CustomInput = ({
  iconLeft,
  iconRight,
  label = "",
  value = "",
  keyboardType = "default",
  isPassword = false,
  onChangeText,
  ...rest
}: Props) => {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef<TextInput>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.label}> {label} </Text>

      <View
        style={{
          borderColor: isActive ? Colors.primary : Colors.gray,
          ...styles.containerInput,
        }}>
        {iconLeft && (
          <Ionicons name={iconLeft} size={24} color={Colors.light} />
        )}
        <TextInput
          ref={inputRef}
          placeholderTextColor={Colors.gray}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          accessibilityLabel={value}
          value={value}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          secureTextEntry={isPassword}
          style={{
            ...styles.input,
          }}
          {...rest}
        />

        {iconRight && (
          <Ionicons name={iconRight} size={24} color={Colors.light} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    gap: 5,
  },

  containerInput: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  input: {
    flex: 1,
    fontSize: Fonts.normal,
    fontWeight: "500",
    color: Colors.light,
  },

  label: {
    fontSize: Fonts.normal,
    color: Colors.light,
    fontWeight: "bold",
  },
});
