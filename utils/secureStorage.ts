import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = "userToken";

/**
 * Guarda el token en almacenamiento seguro.
 * @param token - El JWT obtenido después del login
 */
export async function saveToken(token: string) {
  await SecureStore.setItemAsync(TOKEN_KEY, token, {
    keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
  });
}

/**
 * Obtiene el token almacenado.
 * @returns {Promise<string | null>} El token si existe, o `null` si no está almacenado
 */
export async function getToken(): Promise<string | null> {
  return await SecureStore.getItemAsync(TOKEN_KEY);
}

/**
 * Elimina el token almacenado (cuando el usuario cierra sesión).
 */
export async function deleteToken() {
  await SecureStore.deleteItemAsync(TOKEN_KEY);
}
