import { useEffect, useLayoutEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot } from "expo-router";

import { AuthProvider, useAuth } from "@/context/AuthProvider";

const ProtectedLayout = () => {
  const { loading } = useAuth();
  const [isMounted, setIsMounted] = useState(false);

  const [isFirstRender, setIsFirstRender] = useState(true);

  useLayoutEffect(() => {
    setIsMounted(true);
    setIsFirstRender(false);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (loading || !isMounted) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    );
  }

  return (
    <Slot
      screenOptions={{
        animationEnabled: !isFirstRender,
      }}
    />
  );
};

const App = () => {
  return (
    <AuthProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ProtectedLayout />
      </GestureHandlerRootView>
    </AuthProvider>
  );
};

export default App;
