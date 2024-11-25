import { ComponentProps } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface Props {
  name: ComponentProps<typeof Ionicons>["name"];
  size?: number;
  color?: string;
}

export const ChampionIcon = ({
  name,
  size = 24,
  color = Colors.light,
}: Props) => {
  return <Ionicons name={name} size={size} color={color} />;
};
