import React, { useState } from "react";
import { FlatList } from "react-native";
import AppScreen from "./shared/AppScreen";
import ItemDeleteAction from "./shared/ItemDeleteAction";
import ItemSeparator from "./shared/ItemSeparator";

import TaskNotes from "./TaskNotes";

const initialNotes = [
  {
    id: 1,
    name: "Jon",
    notes: "Note from jon",
    image: require("../assets/6.jpg"),
  },
  {
    id: 2,
    name: "Doe",
    notes: "Note from doe",
    image: require("../assets/7.jpg"),
  },
];

export default function NoteScreen() {
  const [noteList, setNoteList] = useState(initialNotes);
  const [refreshing, setRefreshing] = useState(false);

  const deleteNote = (note) => {
    setNoteList(noteList.filter((n) => n.id !== note.id));
  };
  return (
    <AppScreen>
      <FlatList
        data={noteList}
        keyExtractor={(initialNote) => initialNote.id}
        renderItem={({ item }) => (
          <TaskNotes
            name={item.name}
            notes={item.notes}
            image={item.image}
            onPress={() => console.log("Note Selected", item)}
            renderRightActions={() => (
              <ItemDeleteAction onPress={() => deleteNote(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setNoteList([noteList[1]]);
        }}
      />
    </AppScreen>
  );
}
