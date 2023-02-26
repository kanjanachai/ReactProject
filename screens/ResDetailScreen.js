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
  // const { id } = route.params;
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
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            // flexDirection: "row",
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
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              {item.title}
            </Text>
          </View>
          <View style={{}}>
            <Image
              style={{
                width: 320,
                height: 180,
                margin: 5,
                borderRadius: 20,
                resizeMode: "cover",
              }}
              source={{ uri: item.picture }}
            />
          </View>
          <View style={{ margin: 5 }}>
            <Text style={{ fontSize: 14, fontWeight: "500" }}>
              {item.detail}
            </Text>
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
          <View style={{ flex: 1, flexDirection: "row", marginVertical:10}}>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#404258",
                padding: 5,
                margin: 5,
                borderRadius: 20,
              }}
              onPress={() => navigation.navigate("Booking")}
            >
              <Text style={{ color: "white" }}>Page Fb.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#404258",
                padding: 5,
                margin: 5,
                borderRadius: 20,
              }}
              onPress={() => navigation.navigate("Booking")}
            >
              <Text style={{ color: "white" }}>Maps</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{
                flex: 1,
                backgroundColor: "#404258",
                padding: 5,
                margin: 5,
                borderRadius: 20,
              }}
              onPress={() => navigation.navigate("Booking")}
            >
              <Text style={{ color: "white" }}>Booking</Text>
            </TouchableOpacity>
          </View>
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
        // keyExtractor={(item, index) => item.id.toString()}
        onRefresh={_onRefresh}
        refreshing={loading}
        renderItem={_renderItem}
      />
    </SafeAreaView>
    // <View>
    //   <Text>ResDetailScreen</Text>
    //   {/* <Text>{ress}</Text> */}
    //   <Button title="Booking" onPress={() => navigation.navigate("Booking")} />
    //   <Button title="Google Maps" onPress={() => alert("facebook")} />
    //   <Button
    //     title="Page Facebook"
    //     // onPress={() => Linking.openURL(maps, "_self")}
    //   />
    // </View>
  );
};

export default ResDetailScreen;
