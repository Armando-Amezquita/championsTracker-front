import { useAuth } from "../../context/AuthProvider";
import { Redirect } from "expo-router";
import { Slot } from "expo-router";

function AuthLayout() {
  // const { userToken, loading } = useAuth();

  // if (loading) {
  //   return null;
  // }

  // if (userToken) {
  //   return <Redirect href='/tabs' />;
  // }

  return <Slot />;
}

export default AuthLayout;
