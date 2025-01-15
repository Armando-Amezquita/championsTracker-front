import { ReactNode } from "react";
import { View, Text } from "react-native";
import { Colors } from "@/presentation/styles/global-styles";

interface Props {
  title?: string;
  children?: ReactNode;
}

export const InformationPanel = ({ title, children }: Props) => {
  return (
    <View
      style={{
        width: "90%",
        backgroundColor: Colors.grayDark,
        marginHorizontal: "auto",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
      }}>
      {title?.length && (
        <Text
          style={{
            fontSize: 24,
            color: Colors.light,
            fontWeight: "bold",
            marginBottom: 10,
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: Colors.gray,
          }}>
          {title}
        </Text>
      )}

      {children}
    </View>
  );
};
