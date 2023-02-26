import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./HomeScreen";
import Home2Screen from "./Home2Screen";
import Testpage from "./testpage";
import { NavigationContainer } from "@react-navigation/native";
import testpage from "./testpage";

const Tab = createBottomTabNavigator();

const MenuScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          position: "absolute",
          bottom: 10,
          left: 10,
          right: 10,
          borderRadius: 15,
          backgroundColor: "#404258",
          height: 60,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.menu_btn}>
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={22}
                color={focused ? "#ffffff" : "#888888"}
              />
              <Text style={{color: focused ? "#ffffff" : "#888888"}}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home2"
        component={Home2Screen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.menu_btn}>
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={22}
                color={focused ? "#ffffff" : "#888888"}
              />
              <Text style={{color: focused ? "#ffffff" : "#888888"}}>Home2</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={Testpage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.menu_btn}>
              <Ionicons
                name={focused ? "newspaper" : "newspaper-outline"}
                size={22}
                color={focused ? "#ffffff" : "#888888"}
              />
              <Text style={{color: focused ? "#ffffff" : "#888888"}}>Promotion</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 3,
    elevation: 5,
  },
  menu_btn:{
    alignItems:"center",
    justifyContent:"center",
  },
});
