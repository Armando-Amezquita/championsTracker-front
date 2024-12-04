import { Stack } from "expo-router";

const App = () => {
  return (
    <Stack
      screenOptions={{
        animation: "fade",
        headerShown: false,
      }}
    />
  );
};

export default App;
