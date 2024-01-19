import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola Coder</Text>
      <Text style={styles.title}>Estoy empezando a programar APPs </Text>
      <Text style={styles.signature}>JP </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    justifyContent: "center",
    gap: 30,
  },
  title: {
    fontSize: 60,
    textAlign: "center",
    marginTop: 10,
  },
  signature: {
    color: "red",
    fontSize: 80,
    textAlign: "right",
    marginTop: 20,
  },
});
