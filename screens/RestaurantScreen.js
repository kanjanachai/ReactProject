import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import styles from "../component/styles";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

const RestaurantScreen = ({ navigation, route }) => {
  const [restaurant, setRestaurant] = useState([]);
  const [loading, setLoading] = useState(false);
  const api = "https://stormy-panther.cyclic.app/restaurant/";

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
        style={styles.res_loading}
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
      <View style={{flex:1}}>
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
              style={styles.res_box}
            >
              <Image
                style={styles.res_size_image}
                source={{ uri: item.picture }}
              />
              <View style={{ margin: 10, width: 190 }}>
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
      <FlatList
        data={restaurant}
        onRefresh={_onRefresh}
        refreshing={loading}
        renderItem={_renderItem}
      />
    </SafeAreaView>
  );
};

export default RestaurantScreen;
