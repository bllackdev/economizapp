import { NavigationContainer } from "@react-navigation/native";

import { AppUserRoutes } from "./app.user.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AppUserRoutes />
    </NavigationContainer>
  );
}
