import { useRef } from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { Icon, IconButton, View, useToken } from "native-base";
import { FontAwesome, Entypo, Ionicons, AntDesign } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet";

import { useUserData } from "../hooks/useUserData";

import { Home } from "../screens/Home";
import { Register } from "../screens/Register";
import { Extract } from "../screens/Extract";
import { Resume } from "../screens/Resume";
import { CreditCards } from "../screens/CreditCards";
import { Avatar } from "../components/Avatar";
import { Profile } from "../screens/Profile";
import { Menu } from "../components/Menu";

type AppUserRoutesParamList = {
  home: undefined;
  creditCards: undefined;
  register: undefined;
  extract: undefined;
  resume: undefined;
  profile: undefined;
  menu: undefined;
};

export type AppUserRoutesParamListProps =
  BottomTabNavigationProp<AppUserRoutesParamList>;

export function AppUserRoutes() {
  const { Navigator, Screen } =
    createBottomTabNavigator<AppUserRoutesParamList>();
  const { photoURL } = useUserData();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const purpleColor = useToken("colors", "purple.500");
  const greenColor = useToken("colors", "green.500");

  const handleBottomSheetOpen = () => bottomSheetRef.current?.expand();
  const handleBottomSheetClose = () => bottomSheetRef.current?.snapToIndex(0);

  const MenuScreen = () => {
    return null;
  };

  return (
    <View flex={1}>
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: greenColor,
          tabBarInactiveTintColor: purpleColor,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarStyle: {
            borderTopWidth: 0,
            height: Platform.OS === "android" ? 60 : 96,
            paddingBottom: 4,
            paddingTop: 4,
            marginHorizontal: 12,
            marginBottom: 8,
            backgroundColor: "#252525",
            borderRadius: 40,
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Screen
          name="home"
          component={Home}
          options={{
            tabBarLabel: "Listagem",
            tabBarIcon: ({ color, size }) => (
              <Icon
                as={<FontAwesome name="home" />}
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Screen
          name="creditCards"
          component={CreditCards}
          options={{
            tabBarLabel: "Cartões",
            tabBarIcon: ({ color, size }) => (
              <Icon
                as={<Entypo name="credit-card" />}
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Screen
          name="menu"
          component={MenuScreen}
          options={{
            tabBarButton: () => (
              <IconButton
                icon={<Icon as={<AntDesign name="pluscircleo" />} 
                size={10}
                color='purple.500'
                />}
                borderRadius="full"
                onPress={() => handleBottomSheetOpen()}
              />
            ),
          }}
          listeners={() => ({
            tabPress: (event) => {
              event.preventDefault();
            },
          })}
        />
        <Screen
          name="extract"
          component={Extract}
          options={{
            tabBarLabel: "Resumo",
            tabBarIcon: ({ color, size }) => (
              <Icon
                as={<Ionicons name="swap-horizontal-sharp" />}
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
          name="profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <Avatar
                selected={color === greenColor}
                source={{ uri: photoURL }}
              />
            ),
          }}
        />
      </Navigator>
      <Menu ref={bottomSheetRef} onClose={handleBottomSheetClose}  />
    </View>
  );
}
