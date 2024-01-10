import React from "react";
import { NativeBaseProvider } from "native-base";

import { SignIn } from "./src/screens/SignIn";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
}