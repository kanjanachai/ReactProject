import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./HomeScreen";
import Testpage from "./testpage";

const Tab = createBottomTabNavigator();

const MenuScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="TestPage" component={Testpage} />
    </Tab.Navigator>
  );
};

export default MenuScreen;
