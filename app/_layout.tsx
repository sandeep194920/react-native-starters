import React from "react";
import Drawer from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Button } from "react-native";

const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="(app)" options={{ drawerLabel: "Home" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
