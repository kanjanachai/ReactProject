import { Text, View, Button } from "react-native";
import React from "react";

const ResDetailScreen = ({ navigation }) => {
  return (
    <View>
      <Text>ResDetailScreen</Text>
      <Button title="Booking" onPress={() => navigation.navigate("Booking")} />
      <Button title="Google Maps" onPress={() => navigation.navigate("Booking")} />
      <Button title="Page Facebook" onPress={() => navigation.navigate("Booking")} />
    </View>
  );
};

export default ResDetailScreen;

