import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./Screens/HomeScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import UserScreen from "./Screens/UserScreen";
import Icon from "react-native-vector-icons/Entypo";
import DrawerContent from "./DrawerContent";
import Login from "./Screens/Login&Register/Login";
import Register from "./Screens/Login&Register/Register";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const StackNav = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: "orange",
          },
          headerTintColor: "white",
          headerLeft: () => {
            return (
              <Icon
                name="menu"
                size={30}
                color="white"
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              />
            );
          },
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ name: "Sandeep" }} // incase you want to give initial parameters as props
      />
      <Stack.Screen name="User" component={UserScreen} />
      <Stack.Screen name="LoginNav" component={LoginNav} />
    </Stack.Navigator>
  );
};

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="DrawerHome" component={StackNav} />
    </Drawer.Navigator>
  );
};

const LoginNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Main" component={DrawerNav} />
    </Stack.Navigator>
  );
};
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getData = async () => {
    const data = await AsyncStorage.getItem("isLoggedIn");
    console.log("The data of logged in is", data);
    setIsLoggedIn(data);
  };

  useEffect(() => {
    getData();
  }, [isLoggedIn]);

  console.log("Is logged in ", isLoggedIn);

  return (
    // <NavigationContainer>
    //   {/* Use either StackNavigator or DrawerNavigator */}
    //   {/* <StackNav /> */}
    //   <DrawerNav />
    // </NavigationContainer>
    <NavigationContainer>
      {isLoggedIn ? <DrawerNav /> : <LoginNav />}
    </NavigationContainer>
  );
}
