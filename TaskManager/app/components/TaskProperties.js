import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "./shared/config/colors";

export default function TaskProperties() {
  return (
    <View style={styles.container}>
      <Text style={styles.properties}>Priority</Text>
      <Text style={styles.properties}>Status</Text>
      <Text style={styles.properties}>Date</Text>
      <Text style={styles.properties}>Location</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 15,
  },
  properties: {
    flex: 1,
    fontWeight: "bold",
    backgroundColor: colors.secondary,
    marginBottom: 20,
    borderRadius: 15,
    padding: 15,
  },
});
