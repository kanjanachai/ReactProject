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

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/banner.png")}
        style={{ width: "100%", height: 180, marginBottom: 5}}
      />
      <Text style={styles.home_txt_sty}>This is a festival of flavors.</Text>
      <View style={{ flex: 1, width: "92%" }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.home_btn_sty}
            onPress={() =>
              navigation.navigate("Restaurant", { page: "Korean Food", cate: "korean" })
            }
          >
            <Image
              source={require("../assets/iconfood/korea.png")}
              style={{ width: 50, height: 50, margin: 4 }}
            />
            <Text style={styles.home_txt_btn_sty}>Korean Food</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.home_btn_sty}
            onPress={() =>
              navigation.navigate("Restaurant", { page: "Japanese Food", cate: "japanese" })
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
              navigation.navigate("Restaurant", { page: "Chinese Food", cate: "chinese" })
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
              navigation.navigate("Restaurant", { page: "Thai Food", cate: "thai" })
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
              navigation.navigate("Restaurant", { page: "Recommend", cate: "recommend" })
            }
          >
            <Image
              source={require("../assets/iconfood/recommend.png")}
              style={{ width: 50, height: 50, margin: 4 }}
            />
            <Text style={styles.home_txt_btn_sty}>Recommend</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.home_btn_sty}
            onPress={() =>
              navigation.navigate("Restaurant", { page: "All Restaurant",cate: "" })
            }
          >
            <Image
              source={require("../assets/iconfood/all.png")}
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
