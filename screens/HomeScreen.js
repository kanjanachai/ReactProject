import { Text, View, Button, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "../component/styles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Image
        source={require("../assets/testpic.jpg")}
        style={{ width: "100%", height: 200, margin:20 }}
      />
      <View style={{ flex: 1, width: "90%" }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.btn_home_style}
            onPress={() => navigation.navigate("Restaurant")}
          >
            <Image
              source={require("../assets/react_logo.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text style={styles.txtbtnstyle}>Restaurant</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn_home_style}
            onPress={() => navigation.navigate("Restaurant")}
          >
            <Image
              source={require("../assets/react_logo.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text style={styles.txtbtnstyle}>Restaurant</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.btn_home_style}
            onPress={() => navigation.navigate("Restaurant")}
          >
            <Image
              source={require("../assets/react_logo.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text style={styles.txtbtnstyle}>Restaurant</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn_home_style}
            onPress={() => navigation.navigate("Restaurant")}
          >
            <Image
              source={require("../assets/react_logo.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text style={styles.txtbtnstyle}>Restaurant</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.btn_home_style}
            onPress={() => navigation.navigate("Restaurant")}
          >
            <Image
              source={require("../assets/react_logo.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text style={styles.txtbtnstyle}>Restaurant</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn_home_style}
            onPress={() => navigation.navigate("Restaurant")}
          >
            <Image
              source={require("../assets/react_logo.png")}
              style={{ width: 40, height: 40 }}
            />
            <Text style={styles.txtbtnstyle}>Restaurant</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
