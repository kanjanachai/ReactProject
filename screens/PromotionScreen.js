import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";

const PromotionScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", backgroundColor: "#6B728E" }}
      >
        <Image
          source={require("../assets/banner/banner1.png")}
          style={styles.imgsty}
        />
        <Image
          source={require("../assets/banner/banner2.png")}
          style={styles.imgsty}
        />
        <Image
          source={require("../assets/banner/banner3.png")}
          style={styles.imgsty}
        />
        <Image
          source={require("../assets/banner/banner4.png")}
          style={styles.imgsty}
        />
        <Image
          source={require("../assets/banner/banner5.png")}
          style={styles.imgsty}
        />
        <View style={{height:80}}></View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default PromotionScreen;

const styles = StyleSheet.create({
  box: {
    width: "100%",
    backgroundColor: "#EAEAEA",
    borderRadius: 20,
    margin: 15,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { height: 0, width: 0 },
  },
  imgsty: {
    width: "100%",
    height: 150,
    // borderRadius: 10,
    marginTop: 5,
  },
});
