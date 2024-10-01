import { Button, StyleSheet, Text, View } from "react-native";

export default function ProfileScreen(props) {
  console.log("props", props);
  const { route, navigation } = props;
  console.log(props);
  return (
    <View style={styles.container}>
      <Text>Profile name</Text>
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
