import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../shared/config/colors";
import TaskProperties from "./TaskProperties";

export default function Task() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.secondaryContainer}>
        <Image style={styles.image} source={require("../../assets/11.jpg")} />
        <Text style={styles.title}>Office Work</Text>
        <Text style={styles.description}>Client Meeting</Text>
      </View>
      <TaskProperties />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.third,
    flexDirection: "column",
    padding: 15,
    paddingTop: 50,
  },
  secondaryContainer: {},
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
    padding: 20,
    paddingBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 5,
    color: colors.black,
  },
  description: {
    fontSize: 25,
    padding: 5,
    fontWeight: "bold",
    color: colors.black,
  },
});
