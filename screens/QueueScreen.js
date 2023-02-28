import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React from "react";
import styles from "../component/styles";

const QueueScreen = ({ navigation, route }) => {
  const time =
    route.params?.time1 + ":" + route.params?.time2 + " " + route.params?.time3;
  const res = route.params?.title;
  const person = route.params?.num;
  const date = route.params?.date;
  const email = route.params?.email;

  return (
    <SafeAreaView style={styles.resu_container}>
      <View style={styles.resu_box}>
        <View style={styles.group}>
          <Text style={styles.title}>ร้าน</Text>
          <Text style={styles.resulttxt}>{res}</Text>
        </View>

        <View style={styles.group}>
          <Text style={styles.title}>วันที่</Text>
          <Text style={styles.resulttxt}>{date}</Text>
        </View>

        <View style={styles.group}>
          <Text style={styles.title}>เวลา</Text>
          <Text style={styles.resulttxt}>{time}</Text>
        </View>

        <View style={styles.group}>
          <Text style={styles.title}>จำนวน</Text>
          <Text style={styles.resulttxt}>{person}</Text>
        </View>

        <View style={styles.group}>
          <Text style={styles.title}>อีเมล</Text>
          <Text style={styles.resulttxt}>{email}</Text>
        </View>

        <TouchableOpacity
          style={styles.resu_btn_sty}
          onPress={() => navigation.navigate("Home")}
        >
          <Text
            style={{ color: "#ffffff", fontWeight: "600", fontSize: "15px" }}
          >
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default QueueScreen;
