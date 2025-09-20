// screens/AboutScreen.js
import React from "react";
import { Text, StyleSheet } from "react-native";
import SafeScreen from "../components/SafeScreen";

export default function AboutScreen({ navigation }) {
  return (
    <SafeScreen title="About" showBack navigation={navigation}>
      <Text style={styles.text}>
        Mini Travel Guide — exemplo simples de app com transições entre páginas.
      </Text>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  text: { fontSize: 16, color: "#333" },
});
