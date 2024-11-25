import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import { Colors, Fonts } from "../styles/global-styles";

interface Props {
  icon?: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress: () => void;
  styleProp?: StyleProp<ViewStyle>;
}

export const CustomButton = ({ label, icon, onPress, styleProp }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? Colors.primary + "90" : Colors.primary,
        },
        styles.button,
        styleProp,
      ]}>
      <Text style={styles.label}>{label}</Text>

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
