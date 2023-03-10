import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#6B728E",
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
    backgroundColor: "#EAEAEA",
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
    color: "#ffffff",
    fontWeight: "500",
    fontSize: 14,
    margin: 8,
  },
  home_hello: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EAEAEA",
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
  home_size_image: {
    width: 50,
    height: 50,
    margin: 4,
  },
  home_banner: {
    width: "100%",
    height: 180,
    marginBottom: 5,
  },

  /// MenuScreen ///
  shadow: {
    shadowColor: "#000000",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 3,
    elevation: 5,
  },
  menu_btn: {
    alignItems: "center",
    justifyContent: "center",
  },

  /// RestaurantScreen ///
  res_loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6B728E",
  },
  res_box: {
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
  },
  res_size_image: {
    width: 80,
    height: 80,
    margin: 5,
    borderRadius: 20,
  },

  /// ResdetailScreen ///
  resde_container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#6B728E",
  },
  resde_box: {
    flex: 1,
    backgroundColor: "#EAEAEA",
    borderRadius: 20,
    padding: 10,
    margin: 15,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { height: 0, width: 0 },
  },
  resde_size_image: {
    width: 315,
    height: 171,
    margin: 5,
    borderRadius: 20,
    resizeMode: "cover",
  },
  resde_txt: {
    fontSize: 14,
    fontWeight: "500",
  },
  resde_btn_sty: {
    backgroundColor: "#ffffff",
    padding: 5,
    margin: 5,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  resde_btn_sty2: {
    flex: 1,
    backgroundColor: "#404258",
    padding: 5,
    margin: 5,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },

  /// BookingScreen ///
  book_caontainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#6B728E",
  },
  book_box: {
    flex: 1,
    backgroundColor: "#EAEAEA",
    borderRadius: 20,
    padding: 10,
    margin: 15,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { height: 0, width: 0 },
  },
  book_btn_sty: {
    backgroundColor: "#404258",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  book_txt_btn: {
    fontWeight: "700",
    fontSize: 26,
    marginHorizontal: 20,
  },
  book_btn_sty2: {
    flex: 1,
    backgroundColor: "#404258",
    borderRadius: 20,
    padding: 10,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },
  book_input_sty: {
    flex: 1,
    marginVertical: 5,
    fontWeight: "500",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },

  /// ResultScreen ///
  resu_container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#6B728E",
  },
  resu_box: {
    width: "92%",
    backgroundColor: "#EAEAEA",
    borderRadius: 20,
    padding: 10,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { height: 0, width: 0 },
  },
  resu_btn_sty: {
    flex: 1,
    backgroundColor: "#404258",
    padding: 10,
    margin: 5,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
  },

  group: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    width: 60,
    height: 30,
    fontSize: 15,
    fontWeight: "600",
    margin: 5,
    alignItems: "flex-start",
  },
  resulttxt: {
    height: 30,
    fontSize: 15,
    fontWeight: "500",
    margin: 5,
  },
});

export default styles;
