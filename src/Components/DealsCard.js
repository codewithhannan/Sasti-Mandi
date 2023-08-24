import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { BLACK } from "../Constants/Colors";
import DealsCountdown from "./DealsCountdown";
import { addToCart } from "../service/cart";
const dealWidth = Dimensions.get("window").width - 20;
const DealsCard = ({ item }) => {
  const [showActions, setShowActions] = useState(false);
  const [deal, setDeal] = useState(null);
  useEffect(() => {
    setDeal(item);
  }, []);

  return (
    <>
      {deal ? (
        <>
          <TouchableOpacity
            style={styles.dealCartWrap}
            // onPress={() => setShowActions(!showActions)}
          >
            <View style={[styles.dealImgActionWrap]}>
              <View style={styles.dealImg}>
                <Image
                  source={{ uri: deal?.image }}
                  style={styles.defaultImg}
                />
              </View>
              <View style={[styles.dealAction1, styles.show]}>
                <DealsCountdown countdownDate={deal?.dealOverOn} />
              </View>
            </View>
            <View style={styles.dealContentWrapInner}>
              <TouchableOpacity
                onPress={() => console.log(`Clicked ${deal?.name}`)}
              >
                <Text style={styles.dealTitle}>{deal?.name}</Text>
              </TouchableOpacity>
              <View style={styles.formSelectWrapper}>
                <Text style={styles.formSelectLabel}>Qty {deal?.quantity}</Text>
              </View>
              <View style={styles.DealsCardBottom}>
                <View style={styles.dealPrice}>
                  <Text style={styles.dealPriceText}>${deal?.price}</Text>
                  <Text style={styles.oldPriceText}>${deal?.oldPrice}</Text>
                </View>
                <TouchableOpacity
                  style={styles.addCart}
                  onPress={async() => {
                    await addToCart(deal)
                    console.log(`Added ${deal?.name} to cart`)
                  }}
                >
                  {/* <Text style={styles.addCartText}>Add</Text> */}
                  <Feather name="shopping-cart" size={18} color={BLACK} />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  dealCartWrap: {
    // backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ececec",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 20,
    width: dealWidth,
    flexDirection: "row",
    flexDirection: "column",
    marginHorizontal: 5,
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  dealContentWrapInner: {
    // position:'absolute',
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ececec",
    borderRadius: 15,
    overflow: "hidden",
    marginTop: "-20%",
    width: dealWidth - 30,
    flexDirection: "row",
    flexDirection: "column",
    marginHorizontal: 15,
    padding: 10,
    borderColor:BLACK,borderWidth:1
  },
  dealImgActionWrap: {
    justifyContent: "center",
    position: "relative",
    // width: "40%",
    // overflow: "hidden",
  },
  dealImg: {
    position: "relative",
    // paddingBottom: "100%",
  },
  defaultImg: {
    // position: "absolute",
    // top: 0,
    // left: 0,
    width: "auto",
    height: 300,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  dealAction1: {
    position: "absolute",
    bottom: "50%",
    marginBottom: -44,
    width: dealWidth / 1.2,
    // backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    padding: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    zIndex: 1,
    // elevation: 2,
  },
  show: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
  dealBadges: {
    backgroundColor: "red",
    position: "absolute",
    top: 0,
    left: 0,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 20,
  },
  hot: {
    color: "#fff",
    fontSize: 14,
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 2,
  },
  dealContentWrap: {
    // width: "60%",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  dealCategory: {
    marginBottom: 5,
  },
  dealCategoryText: {
    color: "#999",
    fontSize: 14,
  },
  dealTitle: {
    color: "#333",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  dealRateCover: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  dealRate: {
    backgroundColor: "#ececec",
    height: 10,
    width: "70%",
    borderRadius: 2,
    overflow: "hidden",
    marginRight: 10,
  },
  dealRating: {
    backgroundColor: "#fb0",
    height: "100%",
  },
  dealRateText: {
    fontSize: 14,
    color: "#999",
  },
  formSelectWrapper: {
    marginBottom: 10,
  },
  formSelectLabel: {
    fontSize: 14,
    marginBottom: 5,
  },
  formSelect: {
    backgroundColor: "#ececec",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  DealsCardBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dealPrice: {
    flexDirection: "row",
    alignItems: "center",
  },
  dealPriceText: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 10,
  },
  oldPriceText: {
    fontSize: 12,
    color: "#999",
    textDecorationLine: "line-through",
  },
  addCart: {
    backgroundColor: "#def9ec",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
  },
  addCartText: {
    color: "#333",
    fontSize: 16,
    marginRight: 10,
  },
  cartIcon: {
    width: 20,
    height: 20,
  },
});

export default DealsCard;
