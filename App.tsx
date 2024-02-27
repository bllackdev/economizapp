import React from "react";
import { LogBox } from "react-native";
import { NativeBaseProvider, StatusBar } from "native-base";

import { Routes } from "./src/routes";

import { GoogleSignin } from "@react-native-google-signin/google-signin";

GoogleSignin.configure({
  webClientId:
    "333799507734-uqn3eadqqd9r7n6ash09bjermad1uin3.apps.googleusercontent.com",
});

export default function App() {
  return (
    <NativeBaseProvider>
      <>
        <StatusBar barStyle='light-content' backgroundColor='#18181b' />
        <Routes />
        {LogBox.ignoreLogs([
          "In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.",
        ])}
      </>
    </NativeBaseProvider>
  );
}
