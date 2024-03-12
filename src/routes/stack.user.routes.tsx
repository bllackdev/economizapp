import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import { Expense } from "../screens/Expense";
import { TabUserRoutes } from "./tab.user.routes";

type StackRoutes = {
  home: undefined;
  expense: undefined;
  revenue: undefined;
  creditCard: undefined;
  investment: undefined;
  category: undefined;
  goals: undefined;
  settings: undefined;
};

export type StackProps = NativeStackNavigationProp<StackRoutes>;

export function StackUserRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={TabUserRoutes} />
      <Screen name="expense" component={Expense} />
      <Screen name="revenue" component={Expense} />
      <Screen name="creditCard" component={Expense} />
      <Screen name="investment" component={Expense} />
    </Navigator>
  );
}
