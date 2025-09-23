import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Footer({ navigation: navProp }) {
  // prioriza prop navigation, se passada; senão usa hook
  const navigation = navProp ?? useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={styles.btn}>🏠 Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("About")}>
        <Text style={styles.btn}>ℹ️ About</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 60,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e6e9ef",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  btn: { color: "#2b7cff", fontWeight: "700", fontSize: 16 },
});
        