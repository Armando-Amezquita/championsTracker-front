import { Colors } from "@/constants/Colors";
import { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  children: ReactNode;
}

export const MainContainerView = ({ children }: Props) => {
  return <View style={styles.contentView}>{children}</View>;
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
});
