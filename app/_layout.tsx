import { Slot, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = () => {
  return (
    // <Stack
    //   screenOptions={{
    //     animation: "fade",
    //     headerShown: false,
    //   }}
    // />
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
};

export default App;
