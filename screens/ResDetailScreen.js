import { Text, View, Button, Linking } from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";

const ResDetailScreen = ({ navigation }) => {

  return (
    <View>
      <Text>ResDetailScreen</Text>
      {/* <Text>{ress}</Text> */}
      <Button title="Booking" onPress={() => navigation.navigate("Booking")} />
      <Button title="Google Maps" onPress={() => alert("facebook")} />
      <Button
        title="Page Facebook"
        // onPress={() => Linking.openURL(maps, "_self")}
      />
    </View>
  );
};

export default ResDetailScreen;
