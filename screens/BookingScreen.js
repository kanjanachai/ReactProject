import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  SafeAreaView,
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
  const [selectedhour, setSelectedhour] = React.useState("");
  const [selectedmin, setSelectedmin] = React.useState("");
  const [selectedampm, setSelectedampm] = React.useState("");
  const [selectcalenda, setSelectcalenda] = React.useState(new Date());
  const [count, setCount] = useState(0);

  const minus = () => {
    if (count <= 0) {
      toast.dismiss();
      toast("One or more people.", {});
    } else {
      setCount(count - 1);
    }
  };
  const pass = () => {
    if (count >= 9) {
      toast.dismiss();
      toast("Not more than nine people.");
    } else {
      setCount(count + 1);
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
                  defaultOption={{ key: "0", value: " 0 " }}
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
                  dropdownItemStyles={{}}
                  dropdownTextStyles={{}}
                />
              </View>
              <View style={{ flex: 1, margin: 4 }}>
                <SelectList
                  setSelected={(val) => setSelectedmin(val)}
                  data={calendata.dataminus}
                  save="value"
                  defaultOption={{ key: "0", value: " 0 " }}
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
                  defaultOption={{ key: "--", value: " -- " }}
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
              Number of People
            </Text>

            <View style={{ marginVertical: 5, alignItems: "flex-start" }}>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "white",
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
                    marginHorizontal: 25,
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
                onPress={() =>
                  navigation.navigate("Result", {
                    num: count,
                    date: selectcalenda.toDateString(),
                    time1: selectedhour,
                    time2: selectedmin,
                    time3: selectedampm,
                  })
                }
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
