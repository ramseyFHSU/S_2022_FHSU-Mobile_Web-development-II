import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "./config/colors";

export default function AppButton({ title, color = "primary", onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    color: colors.black,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
