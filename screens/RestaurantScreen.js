import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

const RestaurantScreen = ({ navigation, route }) => {
  const [restaurant, setRestaurant] = useState([]);
  const [loading, setLoading] = useState(false);
  const api = "https://stormy-panther.cyclic.app/restaurant/";
  // const api = "https://api.codingthailand.com/api/course";
  // const api = "https://zealous-pink-kimono.cyclic.app/inventory";

  const getdata = async () => {
    try {
      setLoading(true);
      const res = await axios.get(api  + route.params.cate);
      setRestaurant(res.data.data);
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
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Detail", { id: item.resid });
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                backgroundColor: "#EAEAEA",
                borderRadius: 20,
                padding: 5,
                marginTop: 15,
                marginLeft: 15,
                marginRight: 15,
                shadowColor: "black",
                shadowOpacity: 0.25,
                shadowRadius: 4,
                shadowOffset: { height: 0, width: 0 },
              }}
            >
              <Image
                style={{ width: 85, height: 85, margin: 5, borderRadius: 20 }}
                source={{ uri: item.picture }}
              />
              <View style={{ margin: 10, width: 180 }}>
                <Text style={{ fontSize: 14, fontWeight: "600", marginBottom: 5 }}>
                  {item.title}
                </Text>
                <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 5 }}>
                  เวลาเปิด : {item.time}
                </Text>
                <Text style={{ fontSize: 14, fontWeight: "500" }}>
                  Rating : {item.rating}
                </Text>
              </View>
              <View style={{ justifyContent: "center", margin: 10 }}>
                {/* <AntDesign name="rightcircleo" size={30} color="black"/> */}
                <AntDesign name="right" size={24} color="black" />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", backgroundColor: "#6B728E" }}
    >
      {/* <View>
        <Text>{route.params?.page}</Text>
      </View> */}
      <FlatList
        data={restaurant}
        // keyExtractor={(item, index) => item.resid.toString()}
        onRefresh={_onRefresh}
        refreshing={loading}
        renderItem={_renderItem}
      />
    </SafeAreaView>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    height: 80,
    elevation: 3,
    borderColor: "gray",
    borderRadius: 5,
    flexDirection: "row",
    marginHorizontal: 20,
  },
  dataContainer: {
    flex: 1,
    // backgroundColor:"#D9D9D9",
  },
  thumbnail: {
    width: 70,
    height: 70,
  },
  dataContent: {
    marginTop: 5,
    marginLeft: 15,
  },
  title: {
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 16,
    color: "#888",
    fontWeight: "700",
  },
  detail2: {
    fontSize: 14,
    color: "#888",
    fontWeight: "500",
  },
  addButtonStyle: {
    width: "100%",
    marginBottom: 15,
  },
});
