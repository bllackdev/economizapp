import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { Icon, useToken } from "native-base";
import { FontAwesome } from "@expo/vector-icons";

import { Home } from "../screens/Home";
import { Register } from "../screens/Register";
import { Extract } from "../screens/Extract";
import { Resume } from "../screens/Resume";

type AppUserRoutesParamList = {
  home: undefined;
  register: undefined;
  extract: undefined;
  resume: undefined;
};

export function AppUserRoutes() {
  const { Navigator, Screen } =
    createBottomTabNavigator<AppUserRoutesParamList>();

  const violetColor = useToken("colors", "violet.700");
  const emeraldColor = useToken("colors", "emerald.500");

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: emeraldColor,
        tabBarInactiveTintColor: violetColor,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          height: Platform.OS === "android" ? 50 : 96,
          paddingBottom: 4,
          paddingTop: 4,
          marginHorizontal: 12,
          marginBottom: 8,
          backgroundColor: "#18181b",
          borderRadius: 40,
        },
      }}
    >
      <Screen
        name='home'
        component={Home}
        options={{
          tabBarLabel: "Listagem",
          tabBarIcon: ({ color, size }) => (
            <Icon as={<FontAwesome name='home' />} color={color} size={size} />
          ),
        }}
      />
      <Screen
        name='register'
        component={Register}
        options={{
          tabBarLabel: "Cadastrar",
          tabBarIcon: ({ color, size }) => (
            <Icon
              as={<FontAwesome name='plus-circle' />}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Screen
        name='extract'
        component={Extract}
        options={{
          tabBarLabel: "Resumo",
          tabBarIcon: ({ color, size }) => (
            <Icon as={<FontAwesome name='list' />} color={color} size={size} />
          ),
        }}
      />
      <Screen
        name='resume'
        component={Resume}
        options={{
          tabBarLabel: "Resumo",
          tabBarIcon: ({ color, size }) => (
            <Icon as={<FontAwesome name='pie-chart' />} color={color} size={size} />
          ),
        }}
      />
      {/* <Screen
        name='category'
        component={Category}
        options={{
          tabBarButton: () => null,
        }}
      /> */}
    </Navigator>
  );
}
