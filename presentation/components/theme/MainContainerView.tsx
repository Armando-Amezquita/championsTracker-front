import { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../../styles/global-styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native";

interface Props {
  children: ReactNode;
  paddingTop?: boolean;
}

export const MainContainerView = ({ children, paddingTop }: Props) => {
  const { top } = useSafeAreaInsets();
  return <SafeAreaView style={styles.contentView}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
});
