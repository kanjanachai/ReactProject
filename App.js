import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MenuScreen from "./screens/MenuScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import ResDetailScreen from "./screens/ResDetailScreen";
import BookingScreen from "./screens/BookingScreen";
import QueueScreen from "./screens/QueueScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#404258",
            height: 50,
            borderBottomWidth: 0,
          },
          headerTitleAlign: "center",
          headerTintColor: "white"/* "#3FA796" */,
          headerTitleStyle: {
            fontWeight: "700",
          },
        }}
      >
        <Stack.Screen name="Home" component={MenuScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} options={({ route }) => ({ title: route.params.page })} />
        <Stack.Screen name="Detail" component={ResDetailScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="Result" component={QueueScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkblue",
    alignItems: "center",
    justifyContent: "center",
  },
  teststyle: {
    fontSize: 120,
    fontWeight: "bold",
    color: "white",
  },
});
