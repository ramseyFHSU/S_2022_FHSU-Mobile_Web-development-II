import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import AppScreen from "../shared/AppScreen";
import AppForm from "../Forms/AppForm";
import AppFormInput from "../Forms/AppFormInput";
import SubmitButton from "../Forms/SubmitButton";

import { authentication } from "../../../firebase";
import { db } from "../../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen({ navigation }) {
  const onSubmit = async ({ name, email, password }) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        authentication,
        email,
        password
      );
      const user = userCredentials.user;
      updateProfile(authentication.currentUser, { displayName: name });
      const formData = { name, email };
      formData.timeStamp = serverTimestamp();
      console.log(formData);
      await setDoc(doc(db, "users", user.uid), formData);
      navigation.navigate("TaskList");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AppScreen style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <AppFormInput
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppFormInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
