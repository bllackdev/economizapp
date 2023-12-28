import React from "react";
import { NativeBaseProvider, Center } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Center>Hello world</Center>
    </NativeBaseProvider>
  );
}