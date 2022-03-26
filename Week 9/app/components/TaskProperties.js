import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import colors from "./shared/config/colors";
import Icon from "./shared/Icon";
import { taskProperties } from "./TaskData";

export default function TaskProperties() {
  return (
    <View style={styles.container}>
      <FlatList
        data={taskProperties}
        renderItem={({ item }) => (
          <View style={styles.properties}>
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
  properties: {
    flex: 1,
    backgroundColor: colors.secondary,
    padding: 20,
    marginBottom: 10,
    borderRadius: 15,
    marginLeft: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  textContainer: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 20,
  },
});
