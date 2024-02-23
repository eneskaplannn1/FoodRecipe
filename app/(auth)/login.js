import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import LottieView from "lottie-react-native";
import { useAuth } from "../../context/auth";

export default function LoginScreen() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const router = useRouter();

  function handleLogin() {
    console.log(1);
    let newError = {};

    if (!email) {
      newError.email = "Please enter your email";
    }

    if (!password) {
      newError.password = "Please enter your password";
    }

    setError(newError);

    if (email && password) {
      console.log("runned");
      signIn();
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.image}>
          <LottieView
            source={require("../../assets/login-animation.json")}
            autoPlay
            loop
            style={{
              width: 450,
              height: 400,
            }}
          />
        </View>
      </SafeAreaView>
      <View style={styles.loginForm}>
        <Text className="text-gray-700  p-1">Email Address</Text>
        <TextInput
          onChangeText={setEmail}
          style={styles.input}
          placeHolder="Enter email"
        />
        <Text className="text-gray-700  p-1">Password</Text>
        <TextInput
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          placeHolder="Enter password"
        />
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text
            style={styles.loginText}
            className="text-center text-gray-700 text-xl"
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginBtn: {
    borderRadius: 8,
    backgroundColor: "#facc15",
    padding: 8,
  },
  loginText: {
    textAlign: "center",
    color: "#334155",
    fontSize: 24,
  },
  container: {
    flex: 1,
    backgroundColor: "#7e22ce",
  },
  image: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginForm: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 18,
    rowGap: 12,
    justifyContent: "flex-start",
    backgroundColor: "white",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  input: {
    padding: 16,
    backgroundColor: "#f3f4f6",
    color: "#334155",
    borderRadius: 12,
    fontSize: 24,
  },
});
