import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import ScreenContainer from "../Components/ScreenContainer";
import { addToCart, getCartItems, removeFromCart } from "../service/cart";
import { storeData } from "../service/storage";
import { AntDesign } from "@expo/vector-icons";
import { BLACK } from "../Constants/Colors";
const Cart = () => {
  const isFocused = useIsFocused();
  const [user, setUser] = useState(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const setCart = async () => {
    setCartItems(await getCartItems());
    setLoading(false);
  };
  const handleQtyAdd = async (item) => {
    await addToCart(item);
    setCartItems(await getCartItems());
  };
  const handleQtyRemove = async (item) => {
    await removeFromCart(item);
    setCartItems(await getCartItems());
  };

  const handleRemoveFromCart = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    storeData("cartItems", updatedCartItems);
    setCartItems(updatedCartItems);
  };

  const getTotalPrice = () => {
    if (cartItems.length > 0) {
      return cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    } else {
      return 0;
    }
  };

  const getTotalDiscount = () => {
    // Calculate total discount based on any applicable discounts
    return 0;
  };

  useEffect(() => {
    if (isFocused) {
      setCart();
    }
  }, [isFocused]);
  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <TouchableOpacity
        style={styles.removeItemButton}
        onPress={() => handleRemoveFromCart(item)}
      >
        <Text style={styles.removeItemButtonText}>
          <AntDesign name="close" size={24} color="#afac4b" />
        </Text>
      </TouchableOpacity>
      <Image
        source={{
          uri: item.type == "product" ? item.images[0].src : item.image,
        }}
        style={styles.itemImage}
      />

      <View style={{ flex: 1 }}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <View style={styles.itemDetails}>
          <Text style={styles.itemPrice}>${item.price}</Text>
          <View style={styles.quantityRow}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => handleQtyRemove(item)}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => handleQtyAdd(item)}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <ScreenContainer
      authentication={(user) => {
        setUser(user);
      }}
    >
      <View style={styles.pageContainer}>
        {!loading ? (
          <>
            {cartItems && (
              <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                ListEmptyComponent={() => (
                  <Text style={styles.emptyCartMessage}>
                    Your cart is empty
                  </Text>
                )}
                ListFooterComponent={() => (
                  <View style={styles.footerContainer}>
                    <View style={styles.footerRow}>
                      <Text style={styles.footerLabel}>Discount:</Text>
                      <Text style={styles.footerValue}>
                        ${getTotalDiscount().toFixed(2)}
                      </Text>
                    </View>
                    <View style={styles.footerRow}>
                      <Text style={[styles.footerLabel, styles.footerTotal]}>
                        Total:
                      </Text>
                      <Text style={[styles.footerValue, styles.footerTotal]}>
                        ${(getTotalPrice() - getTotalDiscount()).toFixed(2)}
                      </Text>
                    </View>
                    <TouchableOpacity style={styles.checkoutButton}>
                      <Text style={styles.checkoutButtonText}>Checkout</Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            )}
          </>
        ) : (
          <View>
            <Text>Loading ...</Text>
          </View>
        )}
        {!user && (
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 20,
  },
  emptyCartMessage: {
    fontSize: 18,
    textAlign: "center",
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemImage: {
    width: 50,
    height: 60,
    marginRight: 10,
    resizeMode: "contain",
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 14,
    fontFamily: "Quicksand-Bold",
    color: BLACK,
  },
  itemPrice: {
    fontSize: 14,
    fontFamily: "Quicksand-SemiBold",
    marginVertical: 10,
    color: BLACK,
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: "#ccc",
    padding: 5,
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  removeItemButton: {
    // backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
    position: "absolute",
    top: 0,
    left: 0,
  },
  removeItemButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 10,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  footerLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  footerValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  footerTotal: {
    color: "#afac4b",
  },
  checkoutButton: {
    backgroundColor: "#afac4b",
    padding: 10,
    borderRadius: 5,
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  loginButton: {
    backgroundColor: "#afac4b",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Quicksand-Bold",
    textAlign: "center",
  },
});

export default Cart;
