// App.js
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import PlaceScreen from "./screens/PlaceScreen";
import AboutScreen from "./screens/AboutScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            // animação padrão para todas as telas
            animation: "slide_from_right",
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          {/* Tela de detalhes com animação diferente */}
          <Stack.Screen
            name="Place"
            component={PlaceScreen}
            options={{ animation: "fade" }}
          />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
