import { Button, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen(props) {
  const { route, navigation } = props;
  return (
    <View style={styles.container}>
      <Text>{route.params.name}</Text>
      <Button title="User" onPress={() => navigation.navigate("User")} />
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
