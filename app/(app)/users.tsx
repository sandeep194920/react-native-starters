import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const StackUsers = () => {
  return (
    <>
      <Stack.Screen options={{ headerTitle: "My Users" }} />
      <View>
        <Text>Users Screen</Text>
      </View>
    </>
  );
};

export default StackUsers;
