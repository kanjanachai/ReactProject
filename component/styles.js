import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F0EEED",
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
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  txtbtnstyle: {
    color: "#332C39",
    fontWeight: "600",
    fontSize: "15px",
    margin: 4,
  },
  txtsty: {
    color: "#332C39",
    fontWeight: "600",
    fontSize: 12,
    margin: 10,
  },
  hello: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    height: 65,
    width: "100%",
    padding: 5,
  },
  txthello: {
    color: "#332C39",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
  },
});

export default styles;
