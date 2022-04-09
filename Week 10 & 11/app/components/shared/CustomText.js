import React from "react";
import { Text } from "react-native";
import defaultStyles from "../shared/config/customStyles";

export default function CustomText({ children }) {
  return <Text style={defaultStyles.text}>{children}</Text>;
}
