import {
  Text,
  View,
  Button,
  Image,
  Linking,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";

import axios from "axios";

const ResDetailScreen = ({ navigation, route }) => {
  const [resdetail, setResdetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const api = "https://stormy-panther.cyclic.app/restaurant/detail/";

  const getdata = async () => {
    try {
      setLoading(true);
      const res = await axios.get(api + route.params.id);
      setResdetail(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getdata();
    }, [])
  );

  if (loading === true) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#6B728E",
        }}
      >
        <ActivityIndicator color="#ffffff" size="large" />
      </View>
    );
  }

  const _onRefresh = () => {
    getdata();
  };

  const _renderItem = ({ item }) => {
    const maps = item.maps;
    const fb = item.fecebook;
    return (
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
        <View
          style={{
            alignItems: "center",
            margin: 5,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>{item.title}</Text>
        </View>
        <View style={{}}>
          <Image
            style={{
              width: 315,
              height: 171,
              margin: 5,
              borderRadius: 20,
              resizeMode: "cover",
            }}
            source={{ uri: item.picture }}
          />
        </View>
        <View style={{ margin: 5 }}>
          <Text style={{ fontSize: 14, fontWeight: "500" }}>{item.detail}</Text>
        </View>
        <View style={{ margin: 5 }}>
          <Text style={{ fontSize: 14, fontWeight: "500" }}>
            เวลาเปิด : {item.time}
          </Text>
        </View>
        <View style={{ margin: 5 }}>
          <Text style={{ fontSize: 14, fontWeight: "500" }}>
            เบอร์ติดต่อ : {item.phone}
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row", marginVertical: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#ffffff",
              padding: 5,
              margin: 5,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "black",
              shadowOffset: { height: 2, width: 0 },
              shadowOpacity: 0.25,
              shadowRadius: 2,
            }}
            onPress={() => Linking.openURL(fb, "_self")}
          >
            <Image
              style={{ width: 28, height: 28 }}
              source={require("../assets/facebook.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#ffffff",
              padding: 5,
              margin: 5,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "black",
              shadowOffset: { height: 2, width: 0 },
              shadowOpacity: 0.25,
              shadowRadius: 2,
            }}
            onPress={() => Linking.openURL(maps, "_self")}
          >
            <Image
              style={{ width: 28, height: 28 }}
              source={require("../assets/maps1.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              backgroundColor: "#404258",
              padding: 5,
              margin: 5,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "black",
              shadowOffset: { height: 2, width: 0 },
              shadowOpacity: 0.25,
              shadowRadius: 2,
            }}
            onPress={() => navigation.navigate("Booking", { name: item.title })}
          >
            <Text
              style={{
                color: "#ffffff",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              Booking
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", backgroundColor: "#6B728E" }}
    >
      <FlatList
        data={resdetail}
        onRefresh={_onRefresh}
        refreshing={loading}
        renderItem={_renderItem}
      />
    </SafeAreaView>
  );
};

export default ResDetailScreen;
