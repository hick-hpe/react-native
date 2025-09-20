// components/Navbar.js
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Navbar({ title, showBack = false }) {
  const navigation = useNavigation();
  return (
    <View style={styles.navbar}>
      {showBack ? (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <Text style={styles.backText}>🔙</Text>
        </TouchableOpacity>
      ) : (
        <View style={{ width: 40 }} />
      )}
      <Text style={styles.title}>{title}</Text>
      <View style={{ width: 40 }} />{/* espaço para balancear o centro */}
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    backgroundColor: "#2b7cff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    elevation: 3,
  },
  title: { color: "#fff", fontSize: 18, fontWeight: "700" },
  backBtn: { padding: 6 },
  backText: { color: "#fff", fontSize: 18 },
});
