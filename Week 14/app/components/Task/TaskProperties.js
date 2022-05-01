import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import colors from "../shared/config/colors";
import Icon from "../shared/Icon";
import { taskProperties } from "./TaskData";

export default function TaskProperties() {
  return (
    <View style={styles.container}>
      <FlatList
        data={taskProperties}
        renderItem={({ item }) => (
          <View style={styles.secondContainer}>
            <Icon
              name={item.icon.name}
              backgroundColor={item.icon.backgroundColor}
            />
            <Text style={styles.textContainer}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 15,
  },
  secondContainer: {
    flex: 1,
    backgroundColor: colors.secondary,
    padding: 20,
    borderRadius: 15,
    marginBottom: 10,
    flexDirection: "row",
    marginLeft: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textContainer: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 20,
  },
});
