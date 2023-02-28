import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";

import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import calendata from "../component/calendardata";
import toast, { Toaster } from "react-hot-toast";
import SwipePicker from "react-native-swipe-picker";
import "react-calendar/dist/Calendar.css";

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
    } else if (email === " " ) {
      toast.dismiss();
      toast("Please enter your email.");
    }
    
    else {
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
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", backgroundColor: "#6B728E" }}
    >
      <View
        style={{
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "#EAEAEA",
            borderRadius: 20,
            padding: 10,
            margin: 15,
            shadowColor: "black",
            shadowOpacity: 0.25,
            shadowRadius: 4,
            shadowOffset: { height: 0, width: 0 },
          }}
        >
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
              backgroundColor: "yellow",
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
            {/* //////////// */}
            <View
              style={{
                marginVertical: 5,
                flex: 1,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  // flex: 1,
                  flexDirection: "row",
                  backgroundColor: "#ffffff",
                  borderRadius: 10,
                  marginVertical: 5,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#404258",
                    borderRadius: 10,
                    padding: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    shadowColor: "black",
                    shadowOffset: { height: 2, width: 0 },
                    shadowOpacity: 0.25,
                    shadowRadius: 2,
                  }}
                  onPress={() => {
                    minus();
                  }}
                >
                  <AntDesign name="minus" size={20} color="#ffffff" />
                </TouchableOpacity>
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 26,
                    marginHorizontal: 20,
                  }}
                >
                  {count}
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#404258",
                    borderRadius: 10,
                    padding: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    shadowColor: "black",
                    shadowOffset: { height: 2, width: 0 },
                    shadowOpacity: 0.25,
                    shadowRadius: 2,
                  }}
                  onPress={() => {
                    pass();
                  }}
                >
                  <AntDesign name="plus" size={20} color="#ffffff" />
                </TouchableOpacity>
              </View>
              {/* /////// */}
              <View
                style={{
                  flex: 1,
                  marginLeft: 20,
                }}
              >
                <TextInput
                  style={{
                    flex: 1,
                    marginVertical: 5,
                    fontWeight: "500",
                    borderColor: "gray",
                    borderWidth: 1,
                    borderRadius: 10,
                    backgroundColor: "#ffffff", 
                  }}
                  placeholder={"  E-mail"}
                  placeholderTextColor={"gray"}
                  onChangeText={setEmail}
                />
              </View>
            </View>
            <View style={{ flex: 1, marginVertical: 5 }}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  backgroundColor: "#404258",
                  borderRadius: 10,
                  padding: 10,
                  marginTop: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: "black",
                  shadowOffset: { height: 2, width: 0 },
                  shadowOpacity: 0.25,
                  shadowRadius: 2,
                }}
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

const styles = StyleSheet.create({
  titleheader: {
    fontSize: "20px",
    padding: "10",
    paddingBottom: 5,
  },
});
