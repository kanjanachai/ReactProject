import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";

const testpage = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/react_logo.png")}
        style={{ width: 80, height: 80 }}
      />
      <Text style={styles.textshow}>TestPage {count}</Text>
      <TouchableOpacity
        style={styles.btnsty}
        onPress={() => {
          setCount(count + 1);
        }}
      >
        <Text style={styles.txtsty}>Test</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnsty}
        onPress={() => {
          setCount(count - 1);
        }}
      >
        <Text style={styles.txtsty}>Test</Text>
      </TouchableOpacity>
    </View>
  );
};

export default testpage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#555",
  },
  textshow: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    margin: 12,
  },
  btnsty: {
    backgroundColor: "gray",
    padding: 6,
    margin: 6,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "white",
    width: 150,
    alignItems: "center",
  },
  txtsty: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
