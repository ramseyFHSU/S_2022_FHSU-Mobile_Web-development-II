import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import {
  AppForm as Form,
  AppFormInput as FormInput,
  AppFormPicker as Picker,
} from "../../components/Forms";
import SubmitButton from "../Forms/SubmitButton";
import AppScreen from "../../components/shared/AppScreen";
import { types } from "../Task/TaskData";

import { db } from "../../../firebase";
import {
  addDoc,
  collection,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

import AuthContext from "../Context/autContext";
import TaskContext from "../Context/TaskContext";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  description: Yup.string().required().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

export default function TaskEditScreen() {
  const { user, setUser } = useContext(AuthContext);

  const handelSubmit = ({ title, description, category }) => {
    if (title.length !== 0 && description.trim().length > 3) {
      const newTask = {
        title,
        description,
        type: category.label,
        userRef: user.uid,
        timestamp: serverTimestamp(),
      };
      console.log(user);
      //To Add the Task
      const addTask = async (newTask) => {
        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "taskList"), newTask);
        console.log("Document written with ID: ", docRef.id);
      };
      addTask(newTask);
    }
  };

  return (
    <AppScreen>
      <Form
        initialValues={{
          title: "",
          description: "",
          category: null,
        }}
        // onSubmit={(values) => console.log(values.category.label)}
        onSubmit={handelSubmit}
        validationSchema={validationSchema}
      >
        <FormInput maxLength={255} name="title" placeholder="Title" />
        <FormInput
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <Picker items={types} name="category" placeholder="Task Type" />
        <SubmitButton title="Add Task" />
      </Form>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
