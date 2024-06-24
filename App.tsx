import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { type } from "arktype";

export default function App() {
  const myType = type({
    test: "string",
    test2: "number>5",
  });
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
