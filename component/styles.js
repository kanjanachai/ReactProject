import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#EAEAEA",
  },
  /// Home Screen ///
  home_btn_sty: {
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
  home_txt_btn_sty: {
    color: "#332C39",
    fontWeight: "600",
    fontSize: "15px",
    margin: 4,
  },
  home_txt_sty: {
    color: "#332C39",
    fontWeight: "500",
    fontSize: 14,
    margin: 8,
  },
  home_hello: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center",
    backgroundColor: "#ffffff",
    height: 35,
    width: "100%",
    padding: 5,
  },
  home_txt_hello: {
    color: "#332C39",
    fontSize: 15,
    fontWeight: "500",
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
});

export default styles;
