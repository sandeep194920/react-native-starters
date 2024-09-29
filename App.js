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
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="User" component={UserScreen} />
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
      <Drawer.Screen name="Home" component={StackNav} />
    </Drawer.Navigator>
  );
};
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
    //   {/* Use either StackNavigator or DrawerNavigator */}
    //   {/* <StackNav /> */}
    //   <DrawerNav />
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
