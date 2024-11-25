import { ReactNode } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface Props {
  children: ReactNode;
}

export const CustomFormView = ({ children }: Props) => {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps='handled'
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 60,
        }}
        style={{
          backgroundColor: Colors.dark,
          minHeight: "100%",
        }}>
        {children}
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};
