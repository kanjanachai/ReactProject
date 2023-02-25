import {
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import styles from "../component/styles";


const HomeScreen = ({ navigation }) => {
  const today = new Date();
  const d = today.toUTCString().split(" ");
  const date = d[0] + " " + d[1] + " " + d[2] + " " + d[3];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View></View>
        <View style={styles.hello}>
          <Text style={styles.txthello}>Hello {date}</Text>
        </View>
        <Image
          source={require("../assets/testpic.jpg")}
          style={{ width: "100%", height: 200, margin: 0 }}
        />
        <Text style={styles.txtsty}>This is a festival of flavors.</Text>
        <View style={{ flex: 1, width: "92%" }}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.btn_home_style}
              onPress={() => navigation.navigate("Restaurant", {page:"Korean Food"})}
            >
              <Image
                source={require("../assets/react_logo.png")}
                style={{ width: 40, height: 40 }}
              />
              <Text style={styles.txtbtnstyle}>Korean Food</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn_home_style}
              onPress={() => navigation.navigate("Restaurant", {page:"Japanese Food"})}
            >
              <Image
                source={require("../assets/react_logo.png")}
                style={{ width: 40, height: 40 }}
              />
              <Text style={styles.txtbtnstyle}>Japanese Food</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.btn_home_style}
              onPress={() => navigation.navigate("Restaurant", {page:"Chinese Food"})}
            >
              <Image
                source={require("../assets/react_logo.png")}
                style={{ width: 40, height: 40 }}
              />
              <Text style={styles.txtbtnstyle}>Chinese Food</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn_home_style}
              onPress={() => navigation.navigate("Restaurant", {page:"Thai Food"})}
            >
              <Image
                source={require("../assets/react_logo.png")}
                style={{ width: 40, height: 40 }}
              />
              <Text style={styles.txtbtnstyle}>Thai Food</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.btn_home_style}
              onPress={() => navigation.navigate("Restaurant", {page:"Recommend"})}
            >
              <Image
                source={require("../assets/react_logo.png")}
                style={{ width: 40, height: 40 }}
              />
              <Text style={styles.txtbtnstyle}>Recommend</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn_home_style}
              onPress={() => navigation.navigate("Restaurant", {page:"All Restaurant"})}
            >
              <Image
                source={require("../assets/react_logo.png")}
                style={{ width: 40, height: 40 }}
              />
              <Text style={styles.txtbtnstyle}>All Restaurant</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
