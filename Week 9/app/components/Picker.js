import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import CustomText from "./CustomText";

export default function Picker({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.text}>
        <CustomText>{label}</CustomText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
