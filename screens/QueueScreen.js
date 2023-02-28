import {
  View,
  Text,
  Button,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React, { useRef } from "react";
// import emailjs from "emailjs-com";
// import emailjs from "@emailjs/browser";

const QueueScreen = ({ navigation, route }) => {
  const time =
    route.params?.time1 + ":" + route.params?.time2 + " " + route.params?.time3;
  const res = route.params?.title;
  const person = route.params?.num;
  const date = route.params?.date;
  const email = route.params?.email;

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", backgroundColor: "#6B728E" }}
    >
      <View
        style={{
          width: "92%",
          backgroundColor: "#EAEAEA",
          borderRadius: 20,
          padding: 10,
          marginTop: 15,
          marginLeft: 15,
          marginRight: 15,
          shadowColor: "black",
          shadowOpacity: 0.25,
          shadowRadius: 4,
          shadowOffset: { height: 0, width: 0 },
        }}
      >
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
          style={{
            flex: 1,
            backgroundColor: "#404258",
            padding: 10,
            margin: 5,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "black",
            shadowOffset: { height: 2, width: 0 },
            shadowOpacity: 0.25,
            shadowRadius: 2,
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Text
            style={{
              color: "#ffffff",
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default QueueScreen;

const styles = StyleSheet.create({
  group: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    width: 60,
    height: 30,
    fontSize: 15,
    fontWeight: "600",
    margin: 5,
    alignItems: "flex-start",
  },
  resulttxt: {
    height: 30,
    fontSize: 15,
    fontWeight: "500",
    margin: 5,
  },
});
