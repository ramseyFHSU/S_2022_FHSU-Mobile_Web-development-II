import { useState } from "react";
import NoteScreen from "./app/components/NoteScreen";
import AppScreen from "./app/components/shared/AppScreen";
import Task from "./app/components/Task";
import TaskCategory from "./app/components/TaskCategory";
import { categories } from "./app/components/TaskData";
import TaskPicker from "./app/components/TaskPicker";

export default function App() {
  const [category, setCategory] = useState();

  return (
    <AppScreen>
      <TaskCategory icon="clipboard" placeholder="Task Name" />
      <TaskCategory
        icon="clipboard-text-multiple-outline"
        placeholder="Task Description"
        multiline
        numberOfLines={4}
      />
      <TaskPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
    </AppScreen>
  );
}
