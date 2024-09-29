import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Profile"
        onPress={() => navigation.navigate("Profile", { name: "Sandeep" })}
      />
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
