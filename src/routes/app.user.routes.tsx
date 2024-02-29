import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { Icon, useToken } from "native-base";
import { FontAwesome, Entypo, Ionicons, AntDesign } from "@expo/vector-icons";

import { useUserData } from "../hooks/useUserData";

import { Home } from "../screens/Home";
import { Register } from "../screens/Register";
import { Extract } from "../screens/Extract";
import { Resume } from "../screens/Resume";
import { CreditCards } from "../screens/CreditCards";
import { Avatar } from "../components/Avatar";
import { Profile } from "../screens/Profile";

type AppUserRoutesParamList = {
  home: undefined;
  creditCards: undefined;
  register: undefined;
  extract: undefined;
  resume: undefined;
  profile: undefined;
};

export type AppUserRoutesParamListProps =
  BottomTabNavigationProp<AppUserRoutesParamList>;

export function AppUserRoutes() {
  const { Navigator, Screen } =
    createBottomTabNavigator<AppUserRoutesParamList>();
  const { photoURL } = useUserData();

  const violetColor = useToken("colors", "violet.500");
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
          height: Platform.OS === "android" ? 60 : 96,
          paddingBottom: 4,
          paddingTop: 4,
          marginHorizontal: 12,
          marginBottom: 8,
          backgroundColor: "#18181b",
          borderRadius: 40,
          justifyContent: "center",
          alignItems: "center",
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
        name='creditCards'
        component={CreditCards}
        options={{
          tabBarLabel: "Cartões",
          tabBarIcon: ({ color, size }) => (
            <Icon
              as={<Entypo name='credit-card' />}
              color={color}
              size={size}
            />
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
              as={<AntDesign name='pluscircleo' />}
              color={color}
              size={10}
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
            <Icon
              as={<Ionicons name='swap-horizontal-sharp' />}
              color={color}
              size={size}
            />
          ),
        }}
      />
      {/* <Screen
        name='resume'
        component={Resume}
        options={{
          tabBarLabel: "Resumo",
          tabBarIcon: ({ color, size }) => (
            <Icon
              as={<FontAwesome name='pie-chart' />}
              color={color}
              size={size}
            />
          ),
        }}
      /> */}
      <Screen
        name='profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Avatar
              selected={color === emeraldColor}
              source={{ uri: photoURL }}
            />
          ),
        }}
      />
    </Navigator>
  );
}
