import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useCallback,
  PropsWithChildren,
} from "react";
import * as SecureStore from "expo-secure-store";

interface AuthContextType {
  userToken: string | null;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = await SecureStore.getItemAsync("userToken");
    console.log("token :>> ", token);
    setUserToken(token);
    setLoading(false);
  };

  const login = useCallback(async (token: string) => {
    await SecureStore.setItemAsync("userToken", token);
    setUserToken(token);
  }, []);

  const logout = useCallback(async () => {
    await SecureStore.deleteItemAsync("userToken");
    setUserToken(null);
  }, []);

  const authValue = useMemo(
    () => ({ userToken, login, logout, loading }),
    [userToken, loading, login, logout]
  );

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
};
