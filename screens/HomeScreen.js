import {
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import styles from "../component/styles";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/banner/banner4.png")}
        style={styles.home_banner}
      />
      <Text style={styles.home_txt_sty}>This is a festival of flavors.</Text>
      <View style={{ flex: 1, width: "92%" }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.home_btn_sty}
            onPress={() =>
              navigation.navigate("Restaurant", {
                page: "Korean Food",
                cate: "korean",
              })
            }
          >
            <Image
              source={require("../assets/iconfood/korea.png")}
              style={styles.home_size_image}
            />
            <Text style={styles.home_txt_btn_sty}>Korean Food</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.home_btn_sty}
            onPress={() =>
              navigation.navigate("Restaurant", {
                page: "Japanese Food",
                cate: "japanese",
              })
            }
          >
            <Image
              source={require("../assets/iconfood/Japan.png")}
              style={styles.home_size_image}
            />
            <Text style={styles.home_txt_btn_sty}>Japanese Food</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.home_btn_sty}
            onPress={() =>
              navigation.navigate("Restaurant", {
                page: "Chinese Food",
                cate: "chinese",
              })
            }
          >
            <Image
              source={require("../assets/iconfood/China.png")}
              style={styles.home_size_image}
            />
            <Text style={styles.home_txt_btn_sty}>Chinese Food</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.home_btn_sty}
            onPress={() =>
              navigation.navigate("Restaurant", {
                page: "Thai Food",
                cate: "thai",
              })
            }
          >
            <Image
              source={require("../assets/iconfood/Thai.png")}
              style={styles.home_size_image}
            />
            <Text style={styles.home_txt_btn_sty}>Thai Food</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.home_btn_sty}
            onPress={() =>
              navigation.navigate("Restaurant", {
                page: "Recommend",
                cate: "recommend",
              })
            }
          >
            <Image
              source={require("../assets/iconfood/recommend.png")}
              style={styles.home_size_image}
            />
            <Text style={styles.home_txt_btn_sty}>Recommend</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.home_btn_sty}
            onPress={() =>
              navigation.navigate("Restaurant", {
                page: "All Restaurant",
                cate: "",
              })
            }
          >
            <Image
              source={require("../assets/iconfood/all.png")}
              style={styles.home_size_image}
            />
            <Text style={styles.home_txt_btn_sty}>All Restaurant</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
