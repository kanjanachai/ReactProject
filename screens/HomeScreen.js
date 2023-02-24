import { Text, View, Button, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "../component/styles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <View style={{ flexDirection: "row", backgroundColor: "green" }}>
        <View style={{ justifyContent: "center" }}>
          <TouchableOpacity style={styles.btn_home_style}>
            <Image
              source={require("../assets/react_logo.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text style={styles.txtbtnstyle}>Restaurant</Text>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent:'center', alignItems:"center"}}>
          <TouchableOpacity style={styles.btn_home_style}>
            <Image
              source={require("../assets/react_logo.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text style={styles.txtbtnstyle}>Restauran2</Text>
          </TouchableOpacity>
        </View>
      </View>

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
