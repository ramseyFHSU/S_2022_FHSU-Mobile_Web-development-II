import React, { useState, useContext } from "react";
import { StyleSheet, Image } from "react-native";

import AppScreen from "../shared/AppScreen";
import AppForm from "../Forms/AppForm";
import AppFormInput from "../Forms/AppFormInput";
import AuthContext from "../Context/autContext";
import SubmitButton from "../Forms/SubmitButton";
import ErrorMessage from "../Forms/ErrorMessage";

import * as yup from "yup";

import { authentication } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password"),
});

export default function LoginForm({ navigation }) {
  const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);

  const onSubmit = async ({ email, password }) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        authentication,
        email,
        password
      )
        .then(authContext.setUser(authentication.currentUser))
        .then(navigation.navigate("Task List"));
      // setLoginFailed(false);
      console.log(userCredentials.user);
      // if (!userCredentials.ok) return setLoginFailed(true);
      // if (userCredentials.user) {
      // authContext.setUser(authentication.currentUser);
      // setLoginFailed(false);
      //   navigation.navigate("Task Notes");
      // }
      // else {
      //   if (!userCredentials.ok) return setLoginFailed(true);
      // }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AppScreen>
      <Image style={styles.logo} source={require("../../assets/10.jpg")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password."
          visible={loginFailed}
        />
        <AppFormInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
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
        <SubmitButton title="Login" />
      </AppForm>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
