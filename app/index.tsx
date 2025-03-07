import { useEffect, useState } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import { useAuth } from "@/context/AuthProvider";

const Index = () => {
  const { loading, userToken } = useAuth();
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    if (isMounted) {
      if (!loading && !userToken) {
        router.replace("/auth");
      }

      if (!loading && userToken) {
        router.replace("/auth/welcome");
      }
    }
  }, [loading, userToken, isMounted]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='#0000ff' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Index;
