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
import axios from "axios";

const RestaurantScreen = ({ navigation, route }) => {
  const [restaurant, setRestaurant] = useState([]);
  const [loading, setLoading] = useState(false);
  const api = "https://stormy-panther.cyclic.app/restaurant";

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

  // useEffect(
  //   useCallback(() => {
  //     getdata();
  //   }, [])
  // );
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
            navigation.navigate("Detail"),
              { id: item.resid, title: item.title };
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
                backgroundColor: "#999999",
              }}
            >
              <Image style={styles.thumbnail} source={{ uri: item.picture }} />
            </View>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  if (loading === true) {
    return (
      <View>
        <ActivityIndicator color="#609EA2" size="large" />
      </View>
    );
  }

  const _onRefresh = () => {
    getdata();
  };

  return (
    <View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>{route.params?.page}</Text>
      </View>
      <FlatList
        data={restaurant}
        // keyExtractor={(item, index) => item.id.toString()}
        onRefresh={_onRefresh}
        refreshing={loading}
        renderItem={_renderItem}
      />
    </View>
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
