import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";

import InputTextField from "./components/InputTextField";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <StatusBar barStyle="dark-content" />
        <View
          style={{
            marginTop: 60,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("./assets/react.png")}
            style={{ width: 64, height: 64 }}
            resizeMode="contain"
          ></Image>
          <Text
            style={[
              styles.text,
              { marginTop: 10, fontSize: 22, fontWeight: "500" },
            ]}
          >
            React Native
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity>
            <View style={styles.socialButton}>
              <Image
                source={require("./assets/facebook.png")}
                style={[styles.socialLogo]}
                resizeMode="contain"
              ></Image>
              <Text style={styles.text}>Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.socialButton}>
              <Image
                source={require("./assets/google.png")}
                style={[styles.socialLogo]}
                resizeMode="contain"
              ></Image>
              <Text style={styles.text}>Google</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text
          style={[
            styles.text,
            {
              color: "#abb4bd",
              fontSize: 15,
              textAlign: "center",
              marginVertical: 20,
            },
          ]}
        >
          or
        </Text>

        <InputTextField title="Email"></InputTextField>
        <InputTextField
          style={{ marginTop: 32, marginBottom: 8 }}
          title="Password"
          isSecure={true}
        ></InputTextField>

        <Text style={[styles.text, styles.link, { textAlign: "right" }]}>
          Forgot password?
        </Text>

        <TouchableOpacity style={styles.submitContainer}>
          <Text
            style={[
              styles.text,
              { color: "#ffffff", fontWeight: "600", fontSize: 16 },
            ]}
          >
            Login
          </Text>
        </TouchableOpacity>

        <Text
          style={[
            styles.text,
            {
              fontSize: 14,
              color: "#abb4bd",
              textAlign: "center",
              marginTop: 24,
            },
          ]}
        >
          Don't have an account?{" "}
          <Text style={[styles.text, styles.link]}>Register Now</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 30,
  },
  text: {
    fontFamily: "Avenir Next",
    color: "#1d2029",
  },
  socialButton: {
    flexDirection: "row",
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(171, 180, 189, 0.69)",
    borderRadius: 4,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(171, 180, 189, 0.35)",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },
  socialLogo: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  link: {
    color: "#ff1654",
    fontSize: 14,
    fontWeight: "500",
  },
  submitContainer: {
    backgroundColor: "#ff1654",
    fontSize: 16,
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(255, 22, 84, 0.24)",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
    shadowRadius: 20,
  },
});
