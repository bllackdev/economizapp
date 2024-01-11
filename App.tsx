import React from "react";
import { NativeBaseProvider } from "native-base";

import { SignIn } from "./src/screens/SignIn";
import { Home } from "./src/screens/Home";
import { Register } from "./src/screens/Register";

export default function App() {
  return (
    <NativeBaseProvider>
      <Register />
    </NativeBaseProvider>
  );
}