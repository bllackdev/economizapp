import React from "react";
import { NativeBaseProvider } from "native-base";

import { SignIn } from "./src/screens/SignIn";
import { Home } from "./src/screens/Home";
import { Register } from "./src/screens/Register";
import { Extract } from "./src/screens/Extract";

export default function App() {
  return (
    <NativeBaseProvider>
      <Extract />
    </NativeBaseProvider>
  );
}