import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomText from "./app/components/CustomText";
import LandingScreen from "./app/components/LandingScreen";
import NoteScreen from "./app/components/NoteScreen";
import Task from "./app/components/Task";
import TaskData from "./app/components/TaskData";
import TaskList from "./app/components/TaskList";
import TaskNotes from "./app/components/TaskNotes";
Task;

export default function App() {
  const [taskList, setTaskList] = useState(TaskData);
  return (
    // <TaskList taskList={taskList} />
    <Task />
    // <TaskNotes />
    // <NoteScreen />
  );
}
