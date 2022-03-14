import React from "react";
import { StyleSheet, Text } from "react-native";
import CustomText from "../CustomText";

export default function Card({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    borderRadius: 15,
    backgroundColor: "#4682b4",
    marginBottom: 20,
    overflow: "hidden",
  },
});
