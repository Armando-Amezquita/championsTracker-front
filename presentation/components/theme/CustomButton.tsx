import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Colors, Fonts } from "../../styles/global-styles";

interface Props {
  icon?: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: () => void;
  stylePressable?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  disabled?: boolean;
}

export const CustomButton = ({
  label,
  icon,
  onPress,
  stylePressable,
  styleText,
  disabled = false,
}: Props) => {
  return (
    <Pressable
      onPress={!disabled ? onPress : undefined}
      style={({ pressed }) => [
        {
          backgroundColor: disabled
            ? Colors.gray
            : pressed
            ? Colors.primary + "90"
            : Colors.primary,
          opacity: disabled ? 0.6 : 1,
        },
        styles.button,
        stylePressable,
      ]}
      disabled={disabled}>
      <Text style={[styles.label, styleText]}>{label}</Text>

      {icon && (
        <Ionicons
          name={icon}
          size={24}
          color={Colors.dark}
          style={{ marginHorizontal: 5 }}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    minHeight: 50,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },

  label: {
    color: Colors.dark,
    fontSize: Fonts.normal,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
