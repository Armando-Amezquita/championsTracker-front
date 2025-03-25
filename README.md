# Proyecto Expo: Winnix 👋

Este es un proyecto Expo creado con [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Empezando

1.  **Instala las dependencias:**

    ```bash
    npm install
    ```

2.  **Levanta la aplicación:**

    ```bash
    npx expo start
    ```

    Esto abrirá el navegador con un código QR. Puedes escanearlo con:

    - 📲 Expo Go en tu celular
    - Simulador de Android o iOS en tu PC
    - Dispositivo físico conectado a la misma red

## Conexión con el Backend (NestJS)

La app cliente se comunica con el servidor NestJS. Asegúrate de que ambos estén conectados a la misma red WiFi.

### 1. Configuración del servidor

La IP debe ser la local de tu computadora (donde corre el backend).

En tu archivo adaptador (ej: `auth.adapter.ts`), configura la IP de la siguiente manera:

```typescript
const API_BASE_URL = "http://197.0.0.0:7002/api"; // Reemplaza con tu IP
```

## 💡 Puedes obtener tu IP con:

- Windows: ipconfig

- Mac / Linux: ifconfig

### ❌ ¡Importante! No uses localhost o 127.0.0.1 desde un celular, ya que apuntaría al dispositivo móvil y no al backend.

2. Verificación de la conexión
   Puedes comprobar que el cliente se comunica con el backend usando este endpoint de prueba:

🧪 Ruta:

```
GET http://TU_IP:7002/api/test  // Reemplaza TU_IP con la IP de tu backend
```

💻 Código de prueba (en tu componente React Native):

```
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const MiComponente = () => {
  useEffect(() => {
    fetch("http://192.168.1.20:7002/api/test") // Reemplaza con tu IP
      .then((res) => res.json())
      .then((data) => console.log("Respuesta del backend:", data))
      .catch((err) => console.log("Error al conectar con el backend", err));
  }, []);

  return (
    <View>
      <Text>Verificando conexión con el backend...</Text>
    </View>
  );
};

export default MiComponente;
```

## Respuesta

```
{ "message": "Hello World! thiona" }
```
