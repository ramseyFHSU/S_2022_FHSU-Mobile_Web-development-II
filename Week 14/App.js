import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/components/navigation/AppNavigator";
import AuthContext from "./app/components/Context/autContext";
// import AuthNavigator from "./app/components/navigation/AuthNavigator";
// import TaskNavigator from "./app/components/navigation/TaskNavigator";

export default function App() {
  const [user, setUser] = useState();
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {/* {user ? <AppNavigator /> : <AuthNavigator />} */}
        <AppNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
