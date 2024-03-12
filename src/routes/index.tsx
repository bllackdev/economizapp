import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import auth from "@react-native-firebase/auth";

import { AuthRoutes } from "./auth.routes";
import { StackUserRoutes } from "./stack.user.routes";

export function Routes() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    console.log("USER: ", user);
    return () => subscriber();
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <StackUserRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
