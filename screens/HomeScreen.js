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
    <SafeAreaView style={styles.container}>
      <View style={styles.home_hello}>
        <Text style={styles.home_txt_hello}>Hello {date}</Text>
      </View>
      <Image
        source={require("../assets/testpic.jpg")}
        style={{ width: "100%", height: 140, marginBottom: 5}}
      />
      <Text style={styles.home_txt_sty}>This is a festival of flavors.</Text>
      <View style={{ flex: 1, width: "92%" }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.home_btn_sty}
            onPress={() =>
              navigation.navigate("Restaurant", { page: "Korean Food" })
            }
          >
            <Image
              source={require("../assets/iconfood/Korea.png")}
              style={{ width: 50, height: 50, margin: 4 }}
            />
            <Text style={styles.home_txt_btn_sty}>Korean Food</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.home_btn_sty}
            onPress={() =>
              navigation.navigate("Restaurant", { page: "Japanese Food" })
            }
          >
            <Image
              source={require("../assets/iconfood/Japan.png")}
              style={{ width: 50, height: 50, margin: 4 }}
            />
            <Text style={styles.home_txt_btn_sty}>Japanese Food</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.home_btn_sty}
            onPress={() =>
              navigation.navigate("Restaurant", { page: "Chinese Food" })
            }
          >
            <Image
              source={require("../assets/iconfood/China.png")}
              style={{ width: 50, height: 50, margin: 4 }}
            />
            <Text style={styles.home_txt_btn_sty}>Chinese Food</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.home_btn_sty}
            onPress={() =>
              navigation.navigate("Restaurant", { page: "Thai Food" })
            }
          >
            <Image
              source={require("../assets/iconfood/Thai.png")}
              style={{ width: 50, height: 50, margin: 4 }}
            />
            <Text style={styles.home_txt_btn_sty}>Thai Food</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.home_btn_sty}
            onPress={() =>
              navigation.navigate("Restaurant", { page: "Recommend" })
            }
          >
            <Image
              source={require("../assets/react_logo.png")}
              style={{ width: 50, height: 50, margin: 4 }}
            />
            <Text style={styles.home_txt_btn_sty}>Recommend</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.home_btn_sty}
            onPress={() =>
              navigation.navigate("Restaurant", { page: "All Restaurant" })
            }
          >
            <Image
              source={require("../assets/react_logo.png")}
              style={{ width: 50, height: 50, margin: 4 }}
            />
            <Text style={styles.home_txt_btn_sty}>All Restaurant</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
