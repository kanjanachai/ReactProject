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
import { AntDesign } from '@expo/vector-icons';
import axios from "axios";

const RestaurantScreen = ({ navigation, route }) => {
  const [restaurant, setRestaurant] = useState([]);
  const [loading, setLoading] = useState(false);
  // const api = "https://stormy-panther.cyclic.app/restaurant";
  // const api = "https://api.codingthailand.com/api/course";
  const api = "https://zealous-pink-kimono.cyclic.app/inventory";

  const getdata = async () => {
    try {
      setLoading(true);
      const res = await axios.get(api);
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

  const _renderItem = ({ item }) => {
    return (
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Detail"); /* ,
              { id: item.id, title: item.title } */
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "#F0EEED",
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                backgroundColor: "#ffffff",
                borderRadius: 20,
                padding: 5,
                margin: 6,
                shadowColor: "black",
                shadowOpacity: 0.25,
                shadowRadius: 4,
                shadowOffset: { height: 0, width: 0 },
              }}
            >
              <Image
                style={{ width: 80, height: 80, margin: 10 }}
                source={require("../assets/iconfood/japan.png")}
              />
              <View>
                <Text style={{ fontSize: 16, fontWeight: "800", margin: 5 }}>
                  {/* {item.product} */}แสงท่าเตียน
                </Text>
                <Text style={{ fontSize: 14, fontWeight: "500" }}>
                  12.00-22.00 น. (ปิดวันจันทร์)
                </Text>
                <Text style={{ fontSize: 14, fontWeight: "500" }}>
                  Rating : 4.6
                </Text>
              </View>
              <AntDesign name="rightcircleo" size={24} color="black" />

            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  if (loading === true) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator color="#609EA2" size="large" />
      </View>
    );
  }

  const _onRefresh = () => {
    getdata();
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <View >
        <Text>{route.params?.page}</Text>
      </View>
      <FlatList
        data={restaurant}
        // keyExtractor={(item, index) => item.id.toString()}
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
