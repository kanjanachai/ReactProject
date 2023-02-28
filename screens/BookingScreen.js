import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";

import React, { useState } from "react";
import styles from "../component/styles";
import { SelectList } from "react-native-dropdown-select-list";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import calendata from "../component/calendardata";
import toast, { Toaster } from "react-hot-toast";
import validator from "validator";
import { AntDesign } from "@expo/vector-icons";

const BookingScreen = ({ navigation, route }) => {
  const [selectedhour, setSelectedhour] = useState("00");
  const [selectedmin, setSelectedmin] = useState("00");
  const [selectedampm, setSelectedampm] = useState("--");
  const [selectcalenda, setSelectcalenda] = useState(new Date());
  const [email, setEmail] = useState(" ");
  const [count, setCount] = useState(1);

  const minus = () => {
    if (count <= 1) {
      toast.dismiss();
      toast("More than one person.", {});
    } else {
      setCount(count - 1);
    }
  };
  const pass = () => {
    if (count >= 9) {
      toast.dismiss();
      toast("Less than ten persons.");
    } else {
      setCount(count + 1);
    }
  };
  const check = () => {
    if (selectedampm === "--" || selectedhour === "00") {
      toast.dismiss();
      toast("Please select time for booking.");
    } else if (email === " ") {
      toast.dismiss();
      toast("Please enter your email.");
    } else if (!validator.isEmail(email)) {
      toast.dismiss();
      toast("Invalid email format.");
    } else {
      navigation.navigate("Result", {
        title: route.params?.name,
        num: count,
        date: selectcalenda.toDateString(),
        time1: selectedhour,
        time2: selectedmin,
        time3: selectedampm,
        email: email,
      });
    }
  };

  return (
    <SafeAreaView style={styles.book_caontainer}>
      <View style={{ alignItems: "center" }}>
        <View style={styles.book_box}>
          <Toaster
            position="bottom-center"
            reverseOrder={false}
            toastOptions={{
              duration: 3000,
              style: {
                borderRadius: "10px",
                borderColor: "red",
                borderWidth: "5",
                background: "#333",
                color: "#fff",
              },
            }}
          />

          <View style={{ alignItems: "center", margin: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              {route.params?.name}
            </Text>
          </View>

          <View
            style={{
              // backgroundColor: "yellow",
              alignItems: "center",
              margin: 5,
            }}
          >
            <Calendar
              onChange={setSelectcalenda}
              value={selectcalenda}
              minDate={new Date()}
            />
          </View>

          <View style={{ margin: 5 }}>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              Booking Time
            </Text>
          </View>

          <View style={{ alignItems: "center", zIndex: 99, marginVertical: 5 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, margin: 4 }}>
                <SelectList
                  setSelected={(val) => setSelectedhour(val)}
                  data={calendata.datahour}
                  save="value"
                  defaultOption={{ key: "00", value: " 00 " }}
                  search={false}
                  boxStyles={{
                    zIndex: 2,
                    height: 40,
                    width: 100,
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#ffffff",
                    borderColor: "gray",
                  }}
                  dropdownStyles={{
                    marginTop: 42,
                    position: "absolute",
                    index: 1,
                    height: 120,
                    width: 60,
                    alignItems: "center",
                    backgroundColor: "#ffffff",
                  }}
                />
              </View>
              <View style={{ flex: 1, margin: 4 }}>
                <SelectList
                  setSelected={(val) => setSelectedmin(val)}
                  data={calendata.dataminus}
                  save="value"
                  defaultOption={{ key: "00", value: " 00" }}
                  search={false}
                  boxStyles={{
                    zIndex: 2,
                    height: 40,
                    width: 100,
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#ffffff",
                    borderColor: "gray",
                  }}
                  dropdownStyles={{
                    marginTop: 42,
                    position: "absolute",
                    index: 1,
                    height: 120,
                    width: 60,
                    alignItems: "center",
                    backgroundColor: "#ffffff",
                  }}
                />
              </View>
              <View style={{ flex: 1, margin: 4 }}>
                <SelectList
                  setSelected={(val) => setSelectedampm(val)}
                  data={calendata.dataampm}
                  save="value"
                  defaultOption={{ key: "--", value: " --" }}
                  search={false}
                  boxStyles={{
                    zIndex: 2,
                    height: 40,
                    width: 100,
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#ffffff",
                    borderColor: "gray",
                  }}
                  dropdownStyles={{
                    marginTop: 42,
                    position: "absolute",
                    index: 1,
                    height: 90,
                    width: 60,
                    alignItems: "center",
                    backgroundColor: "#ffffff",
                  }}
                />
              </View>
            </View>
          </View>

          <View style={{ margin: 5 }}>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>
              Number of Person
            </Text>
            <View
              style={{
                marginVertical: 5,
                flex: 1,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#ffffff",
                  borderRadius: 10,
                  marginVertical: 5,
                }}
              >
                <TouchableOpacity
                  style={styles.book_btn_sty}
                  onPress={() => {
                    minus();
                  }}
                >
                  <AntDesign name="minus" size={20} color="#ffffff" />
                </TouchableOpacity>
                <Text style={styles.book_txt_btn}>{count}</Text>
                <TouchableOpacity
                  style={styles.book_btn_sty}
                  onPress={() => {
                    pass();
                  }}
                >
                  <AntDesign name="plus" size={20} color="#ffffff" />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, marginLeft: 20 }}>
                <TextInput
                  style={styles.book_input_sty}
                  placeholder={"  E-mail"}
                  placeholderTextColor={"gray"}
                  onChangeText={setEmail}
                />
              </View>
            </View>
            <View style={{ flex: 1, marginVertical: 5 }}>
              <TouchableOpacity
                style={styles.book_btn_sty2}
                onPress={() => {
                  check();
                }}
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
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookingScreen;
