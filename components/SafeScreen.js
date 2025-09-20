// components/SafeScreen.js
import React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function SafeScreen({ title, children, showBack, navigation }) {
  // navigation é opcional: se for passada, Footer recebe; se não, Footer usa useNavigation
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Navbar title={title} showBack={showBack} />
        <View style={styles.content}>{children}</View>
        <Footer navigation={navigation} />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f6f8fb" },
  container: { flex: 1 },
  content: { flex: 1, padding: 16, justifyContent: "center" },
});
