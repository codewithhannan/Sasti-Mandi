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
import { addToCart } from "../service/cart";
const productWidth = Dimensions.get("window").width/ 2 - 20;
const ProductCard = ({ item }) => {
  const [showActions, setShowActions] = useState(false);
  const [product, setProduct] = useState(null);
  const [badge, setBadge] = useState(null);

  const [defaultImage, setDefaultImage] = useState("");
  const [hoverImage, setHoverImage] = useState("");

  const renderImage = (defaultImage, hoverImage) => {
    // var image = "defaultImage";
    // console.log('hoverImage',hoverImage)
    // console.log('defaultImage',defaultImage)
    // setInterval(() => {
    //   if (image == "defaultImage") {
    //     image = `hoverImage`;
    //     return hoverImage;
    //   } else {
    //     image = `defaultImage`;
    //     return defaultImage;
    //   }
    // }, 3000);
    return defaultImage;
  };
  useEffect(() => {
    item?.badges.map((badge, index) => {
      setBadge(badge);
    });
    item?.images.map((data, index) => {
      if (data.type == "default") {
        setDefaultImage(data.src);
      } else {
        setHoverImage(data.src);
      }
    });
    setProduct(item);
  }, [item]);

  //   console.log("item", item);
  return (
    <>
      {product ? (
        <>
          <TouchableOpacity
            style={styles.productCartWrap}
            onPress={() => setShowActions(!showActions)}
          >
            <View style={[styles.productImgActionWrap]}>
              <View style={styles.productImg}>
                <Image
                  source={{ uri: renderImage(defaultImage, hoverImage) }}
                  style={styles.defaultImg}
                />
              </View>
              <View
                style={[
                  styles.productAction1,
                  showActions ? styles.show : styles.hide,
                ]}
              >
                <TouchableOpacity
                  style={styles.actionBtn}
                  onPress={() =>
                    console.log(`Added ${product?.name} to wishlist`)
                  }
                >
                  <FontAwesome name="heart-o" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.actionBtn}
                  onPress={() => console.log(`Compared ${product?.name}`)}
                >
                  <MaterialCommunityIcons
                    name="compare-horizontal"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.actionBtn}
                  onPress={() => console.log(`Quick view ${product?.name}`)}
                >
                  <FontAwesome5 name="eye" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View style={styles.productBadges}>
                {badge == "Hot" ? (
                  <Text style={styles.hot}>{badge}</Text>
                ) : badge == "Sale" ? (
                  <Text style={styles.sale}>{badge}</Text>
                ) : badge == "New" ? (
                  <Text style={styles.new}>{badge}</Text>
                ) : badge == "best" ? (
                  <Text style={styles.best}>{badge}</Text>
                ) : (
                  <></>
                )}
              </View>
            </View>
            <View style={styles.productContentWrap}>
              <TouchableOpacity
                onPress={() => console.log(`Clicked ${product?.name}`)}
              >
                <Text style={styles.productTitle}>{product?.name}</Text>
              </TouchableOpacity>
              <View style={styles.formSelectWrapper}>
                <Text style={styles.formSelectLabel}>Options</Text>
              </View>
              <View style={styles.productCardBottom}>
                <View style={styles.productPrice}>
                  <Text style={styles.productPriceText}>${product?.price}</Text>
                  <Text style={styles.oldPriceText}>${product?.oldPrice}</Text>
                </View>
                <TouchableOpacity
                  style={styles.addCart}
                  onPress={async() => {
                    await addToCart(product)
                    console.log(`Added ${product?.name} to cart`)
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
  productCartWrap: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ececec",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 10,
    width: productWidth,
    flexDirection: "row",
    flexDirection: "column",
    marginHorizontal: 5,
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  productImgActionWrap: {
    justifyContent: "center",
    position: "relative",
    // width: "40%",
    // overflow: "hidden",
  },
  productImg: {
    position: "relative",
    // paddingBottom: "100%",
  },
  defaultImg: {
    // position: "absolute",
    // top: 0,
    // left: 0,
    width: "auto",
    height: 150,
  },
  productAction1: {
    position: "absolute",
    bottom: "50%",
    marginBottom: -44,
    width: productWidth / 3,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
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
  productBadges: {
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
  productContentWrap: {
    // width: "60%",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  productCategory: {
    marginBottom: 5,
  },
  productCategoryText: {
    color: "#999",
    fontSize: 14,
  },
  productTitle: {
    color: "#333",
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productRateCover: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  productRate: {
    backgroundColor: "#ececec",
    height: 10,
    width: "70%",
    borderRadius: 2,
    overflow: "hidden",
    marginRight: 10,
  },
  productRating: {
    backgroundColor: "#fb0",
    height: "100%",
  },
  productRateText: {
    fontSize: 12,
    color: "#999",
  },
  formSelectWrapper: {
    marginBottom: 10,
  },
  formSelectLabel: {
    fontSize: 12,
    marginBottom: 5,
  },
  formSelect: {
    backgroundColor: "#ececec",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  productCardBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productPrice: {
    flexDirection: "row",
    alignItems: "center",
  },
  productPriceText: {
    fontSize: 12,
    fontWeight: "bold",
    marginRight: 10,
  },
  oldPriceText: {
    fontSize: 10,
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

export default ProductCard;
