import { StyleSheet, Text } from "react-native";
import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router, useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const DrawerContent = () => {
  const nav = useNavigation();
  return (
    <DrawerContentScrollView style={styles.container}>
      <Text>This is a custom drawer</Text>
      <DrawerItem
        label="Home"
        onPress={() => {
          nav.dispatch(DrawerActions.closeDrawer);
        }}
      />

      <DrawerItem
        label="Users"
        onPress={() => {
          router.push("/(app)/users");
        }}
      />

      <DrawerItem
        label="Sign Out"
        icon={({ color, size }) => (
          <Icon name="person" color="black" size={size} />
        )}
        onPress={() => {}} // logout user function call
        inactiveTintColor="blue"
      />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D3D3D3",
  },
});
