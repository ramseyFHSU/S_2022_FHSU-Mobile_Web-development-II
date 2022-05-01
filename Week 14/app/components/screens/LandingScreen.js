import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import AppButton from "../shared/AppButton";
import CustomText from "../shared/CustomText";

export default function LandingScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../../assets/11.jpg")}
    >
      <View style={styles.textContainer}>
        <CustomText>Hello Welcome to Task Manager</CustomText>
      </View>
      <AppButton
        title="Login"
        onPress={() => navigation.navigate("LoginScreen")}
      />
      <AppButton
        title="Register"
        color="secondary"
        onPress={() => navigation.navigate("RegisterScreen")}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});
