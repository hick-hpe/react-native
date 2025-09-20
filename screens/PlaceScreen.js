import { View, Text, StyleSheet } from "react-native";
import SafeScreen from "../components/SafeScreen";

export default function PlaceScreen({ route, navigation }) {
  const { place } = route.params || { place: { name: "Local", subtitle: "" } };

  return (
    <SafeScreen title={place.name} showBack navigation={navigation}>
      <View style={styles.box}>
        <Text style={styles.name}>{place.name}</Text>
        <Text style={styles.sub}>{place.subtitle}</Text>
        <Text style={styles.desc}>
          Descrição curta: este lugar é ótimo para visitar, tem boa estrutura e
          vistas incríveis. (Exemplo simples para demonstrar transição)
        </Text>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  box: { backgroundColor: "#fff", padding: 16, borderRadius: 10, elevation: 2 },
  name: { fontSize: 18, fontWeight: "800", marginBottom: 6 },
  sub: { fontSize: 14, color: "#666", marginBottom: 8 },
  desc: { fontSize: 14, color: "#333" },
});
