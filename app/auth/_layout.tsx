import { useAuth } from "../../context/AuthProvider";
import { Redirect, Stack } from "expo-router";

function AuthLayout() {
  const { userToken, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (userToken) {
    return <Redirect href='/tabs' />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}

export default AuthLayout;
