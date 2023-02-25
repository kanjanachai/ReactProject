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
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://api.codingthailand.com/api/course");
      setProduct(res.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error.message}</Text>
        <Text>เกิดข้อผิดพลาด ไม่สามารถตติดต่อกับ Server ได้</Text>
      </View>
    );
  }

  // useEffect(() => {
  //   getData();
  // }, [])

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );

  const _renderItem = ({ item }) => {
    return (
      <SafeAreaView>
        <TouchableOpacity
          style={styles.addButtonStyle}
          onPress={() => {
            navigation.navigate("Detail", {
              id: item.id,
              title: item.title,
            });
          }}
        >
          {/* ---------------------------------------------------------------------------------- */}
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
                width: "92%",
                flexDirection: "row",
                margin: 0,
                backgroundColor: "#ffffff",
                padding: 16,
                borderRadius: 10,
                shadowColor: "black",
                shadowOffset: { height: 2, width: 0 },
                shadowOpacity: 0.35,
                shadowRadius: 1,
              }}
            >
              <Image
                resizeMode="cover"
                style={styles.thumbnail}
                source={{ uri: item.picture }}
              />
              <View style={styles.dataContainer}>
                <View style={styles.dataContent}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.detail}>{item.detail}</Text>
                </View>
              </View>
              <Image
                resizeMode="cover"
                style={styles.thumbnail}
                source={{ uri: item.picture }}
              />
            </View>
          </View>
          {/* ---------------------------------------------------------------------------------- */}
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  if (loading === true) {
    return (
      <View>
        <ActivityIndicator color="#f4511e" size="large" />
      </View>
    );
  }

  const _onRefresh = () => {
    getData();
  };

  return (
    <View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>{route.params?.page}</Text>
      </View>
      <FlatList
        data={product}
        keyExtractor={(item, index) => item.id.toString()}
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
