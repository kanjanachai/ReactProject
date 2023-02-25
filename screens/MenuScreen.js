import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./HomeScreen";
import Home2Screen from "./Home2Screen";
import Testpage from "./testpage";

const Tab = createBottomTabNavigator();

const MenuScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="News" component={Testpage} />
      <Tab.Screen name="Discover" component={Home2Screen} />
    </Tab.Navigator>
  );
};

export default MenuScreen;
