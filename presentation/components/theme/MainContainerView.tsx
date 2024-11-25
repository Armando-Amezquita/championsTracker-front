import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "../styles/global-styles";

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
