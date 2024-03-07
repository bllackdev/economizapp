import "react-native-gesture-handler";
import React from "react";
import { LogBox } from "react-native";
import { NativeBaseProvider, StatusBar } from "native-base";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PortalProvider } from "@gorhom/portal";

import { Routes } from "./src/routes";

import { THEME } from "./src/theme";

GoogleSignin.configure({
  webClientId:
    "333799507734-uqn3eadqqd9r7n6ash09bjermad1uin3.apps.googleusercontent.com",
});

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PortalProvider>
          <>
            <StatusBar barStyle="light-content" backgroundColor="#252525" />
            <Routes />
            {LogBox.ignoreLogs([
              "In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.",
            ])}
          </>
        </PortalProvider>
      </GestureHandlerRootView>
    </NativeBaseProvider>
  );
}
