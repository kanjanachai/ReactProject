import { Text, View, Button, TouchableOpacity } from "react-native";
import React from "react";
import styles from "../component/styles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <TouchableOpacity 
      style={styles.btnstyle}
      >
        <Text style={styles.txtbtnstyle}>adfsdf</Text>
      </TouchableOpacity>
      <Button
        title="Restaurant"
        onPress={() => navigation.navigate("Restaurant")}
      />
      <Button
        title="0000"
        // onPress={() => navigation.navigate("Restaurant")}
      />
      <Button
        title="0000"
        // onPress={() => navigation.navigate("Restaurant")}
      />
      <Button
        title="0000"
        // onPress={() => navigation.navigate("Restaurant")}
      />
      <Button
        title="0000"
        // onPress={() => navigation.navigate("Restaurant")}
      />
      <Button
        title="0000"
        // onPress={() => navigation.navigate("Restaurant")}
      />
    </View>
  );
};

export default HomeScreen;

