import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../styles/global-styles";

interface Props {
  onChange: () => void;
  checked: boolean;
}

export const MyCheckbox = ({ onChange, checked = false }: Props) => {
  return (
    <Pressable
      role='checkbox'
      aria-checked={checked}
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={onChange}>
      {checked && <Ionicons name='checkmark-outline' size={24} />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  checkboxBase: {
    width: 27,
    height: 27,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    borderWidth: 2,
    borderColor: Colors.lightDark,
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
  },
});
