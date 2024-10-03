import { View, Text } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const StackHome = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Stack Home</Text>
      <Text
        onPress={() => {
          router.push("/(app)/users");
        }}
      >
        Go to users page
      </Text>
    </View>
  );
};

export default StackHome;
