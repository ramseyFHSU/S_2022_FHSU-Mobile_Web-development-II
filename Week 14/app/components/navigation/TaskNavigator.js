import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Task from "../Task/Task";
import TaskListScreen from "../screens/TakListScreen";
import NoteScreen from "../screens/NoteScreen";

const Stack = createStackNavigator();

export default function TaskNavigator() {
  return (
    <Stack.Navigator
      presentation="modal"
      // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="TaskList" component={TaskListScreen} />
      <Stack.Screen name="Task" component={Task} />
      <Stack.Screen name="Task Notes" component={NoteScreen} />
    </Stack.Navigator>
  );
}
