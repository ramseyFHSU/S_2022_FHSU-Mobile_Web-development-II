import React from "react";
import { StyleSheet } from "react-native";
import CustomText from "../shared/CustomText";

export default function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <CustomText style={styles.error}>{error}</CustomText>;
}

const styles = StyleSheet.create({
  error: { color: "red" },
});
