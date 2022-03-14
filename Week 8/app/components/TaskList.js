import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "./shared/Card";
import colors from "./shared/config/colors";

export default function TaskList({ taskList }) {
  const list = () => {
    return taskList.map((task) => {
      return (
        <Card key={task.id}>
          <Image style={styles.image} source={task.image} />
          <View style={styles.secondaryContainer}>
            <Text style={styles.title}>{task.title}</Text>
            <Text style={styles.description}>{task.description}</Text>
          </View>
        </Card>
      );
    });
  };
  return <ScrollView style={styles.container}>{list()}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 100,
  },
  secondaryContainer: {
    padding: 20,
    paddingTop: 50,
  },
  image: {
    width: "100%",
    height: 200,
    backgroundColor: "powderblue",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 7,
  },
  description: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});
