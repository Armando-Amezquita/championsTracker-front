import { ComponentProps } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface Props {
  name: ComponentProps<typeof Ionicons>["name"];
  size?: number;
  color?: string;
  style?: ComponentProps<typeof Ionicons>["style"];
}

export const ChampionIcon = ({
  name,
  size = 24,
  color = Colors.light,
  style,
}: Props) => {
  return <Ionicons name={name} size={size} color={color} style={style} />;
};
