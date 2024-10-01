const {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} = require("react-native");
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Alert, SafeAreaView } from "react-native";
import { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

function LoginPage({ props }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { data } = await axios.post("http://192.168.29.210:5001/login-user", {
      email,
      password,
    });
    try {
      if (data.status === "ok") {
        Alert.alert("Login succesful");

        // Store the given token by BE in async storage so that we can send the token when we call other endpoints
        AsyncStorage.setItem("token", data.data);
        AsyncStorage.setItem("isLoggedIn", JSON.stringify(true));

        // @ts-expect-error
        navigation.navigate("Main");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View style={styles.logoContainer} keyboardShouldPersistTap={"always"}>
        <Image
          style={styles.logo}
          source={require("../../assets/mainLogo.png")}
        />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.text_header}>Login !!!</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#420475" style={styles.smallIcon} />
          <TextInput
            onChangeText={setEmail}
            placeholder="Mobile or Email"
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#420475" style={styles.smallIcon} />
          <TextInput
            onChangeText={setPassword}
            placeholder="Password"
            style={styles.textInput}
          />
        </View>
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "flex-end",
            marginTop: 8,
            marginRight: 10,
          }}
        >
          <Text style={{ color: "#420475", fontWeight: "700" }}>
            Forgot Password
          </Text>
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.inBut} onPress={() => handleLogin()}>
          <View>
            <Text style={styles.textSign}>Log in</Text>
          </View>
        </TouchableOpacity>
        <View style={{ padding: 15 }}>
          <Text style={{ fontSize: 14, fontWeight: "bold", color: "#919191" }}>
            ----Or Continue as----
          </Text>
        </View>
        <View style={styles.bottomButton}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity style={styles.inBut2}>
              <FontAwesome
                name="user-circle-o"
                color="white"
                style={styles.smallIcon2}
              />
            </TouchableOpacity>
            <Text style={styles.bottomText}>Guest</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={styles.inBut2}
              onPress={() => {
                // @ts-expect-error
                navigation.navigate("Register");
              }}
            >
              <FontAwesome
                name="user-plus"
                color="white"
                style={[styles.smallIcon2, { fontSize: 30 }]}
              />
            </TouchableOpacity>
            <Text style={styles.bottomText}>Sign Up</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={styles.inBut2}
              onPress={() => alert("Coming Soon")}
            >
              <FontAwesome
                name="google"
                color="white"
                style={[styles.smallIcon2, { fontSize: 30 }]}
              />
            </TouchableOpacity>
            <Text style={styles.bottomText}>Google</Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={styles.inBut2}
              onPress={() => alert("Coming Soon")}
            >
              <FontAwesome
                name="facebook-f"
                color="white"
                style={[styles.smallIcon2, { fontSize: 30 }]}
              />
            </TouchableOpacity>
            <Text style={styles.bottomText}>Facebook</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default LoginPage;
