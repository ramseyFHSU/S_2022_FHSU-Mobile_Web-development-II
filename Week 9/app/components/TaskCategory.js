import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../components/shared/config/styles";

export default function TaskCategory({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={icon}
        color={defaultStyles.colors.secondary}
        size={20}
        style={styles.icons}
      />
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flexDirection: "row",
    borderRadius: 15,
    padding: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 10,
  },
  icons: {
    margin: 10,
  },
});
