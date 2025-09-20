// screens/HomeScreen.js
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import SafeScreen from "../components/SafeScreen";
import ButtonAdd from "../components/ButtonAdd";


// dados de exemplo
const PLACES = [
  { id: "1", name: "Praia Azul", subtitle: "Areia branca e mar calmo" },
  { id: "2", name: "Mirante Alto", subtitle: "Vista panorâmica da cidade" },
  { id: "3", name: "Museu Antigo", subtitle: "História local e exposições" },
];

export default function HomeScreen({ navigation }) {
  return (
    <SafeScreen title="Mini Travel Guide" navigation={navigation}>
      <FlatList
        data={PLACES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("Place", { place: item })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.sub}>{item.subtitle}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      />

      <ButtonAdd />
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#eef2fb",
  },
  name: { fontSize: 16, fontWeight: "700", color: "#222" },
  sub: { fontSize: 13, color: "#666", marginTop: 6 },
});
