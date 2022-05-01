import React from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import Card from "../shared/Card";
import colors from "../shared/config/colors";
import TaskData from "./TaskData";
import CustomText from "../shared/CustomText";

const Item = ({ title, description, image }) => (
  <>
    <Image style={styles.image} source={image} />
    <View style={styles.secondaryContainer}>
      <CustomText style={styles.title}>{title}</CustomText>
      <CustomText style={styles.description}>{description}</CustomText>
    </View>
  </>
);

export default function TaskList({ navigation }) {
  const renderItem = ({ item }) => (
    <Card>
      <TouchableHighlight onPress={() => navigation.navigate("Task")}>
        <Item
          title={item.title}
          description={item.description}
          image={item.image}
        />
      </TouchableHighlight>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={TaskData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: statusbar.currentHeight || 0,
  },
  secondaryContainer: {
    padding: 20,
    paddingTop: 50,
  },
  image: {
    width: 400,
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

import React, { useState, useEffect, useContext } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import { getDocs, orderBy, query, limit, collection } from "firebase/firestore";
import { db } from "../../../firebase";
import Card from "../shared/Card";
import colors from "../shared/config/colors";
import TaskData from "../Task/TaskData";
import CustomText from "../shared/CustomText";
import TaskContext from "../Context/TaskContext";

const Item = ({ title, description, image }) => (
  <>
    <Image style={styles.image} source={image} />
    <View style={styles.secondaryContainer}>
      <CustomText style={styles.title}>{title}</CustomText>
      <CustomText style={styles.description}>{description}</CustomText>
    </View>
  </>
);

export default function TaskList({ navigation }) {
  const { taskList, isLoading } = useContext(TaskContext);

  const renderItem = ({ item }) => (
    <Card>
      <TouchableHighlight onPress={() => navigation.navigate("Task")}>
        <Item
          title={item.data.title}
          description={item.data.description}
          // image={item.image}
        />
      </TouchableHighlight>
    </Card>
  );

  console.log(taskData);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={taskList.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: statusbar.currentHeight || 0,
  },
  secondaryContainer: {
    padding: 20,
    paddingTop: 50,
  },
  image: {
    width: 400,
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
