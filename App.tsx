import React from "react";
import { LogBox } from "react-native";
import { NativeBaseProvider } from "native-base";

import { Routes } from "./src/routes";

export default function App() {
  return (
    <NativeBaseProvider>
      <>
        <Routes />
        {LogBox.ignoreLogs([
          "In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.",
        ])}
      </>
    </NativeBaseProvider>
  );
}
