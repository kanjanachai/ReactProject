import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  btnstyle: {
    padding: 8,
    margin: 12,
    backgroundColor: "#D9D9D9",
    borderRadius: 4,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 1,
  },
  btn_home_style: {
    flex: 1,
    width: "auto",
    padding: 5,
    margin: 5,
    backgroundColor: "#D9D9D9",
    borderRadius: 5,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 1,
  },
  txtbtnstyle: {
    color: "#00000",
    fontWeight: "bold",
    fontSize: "16px",
  },
});

export default styles;
