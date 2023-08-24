import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";
import ScreenContainer from "../Components/ScreenContainer";
import { useEffect } from "react";
import { BLACK } from "../Constants/Colors";

const Delivery = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState(null);
  useEffect(() => {
    const dummyOrders = [
      {
        id: 1,
        itemCount: 3,
        date: "2022-02-22",
        status: "Delivered",
        price: "$24.99",
        location: {
          latitude: 40.7128,
          longitude: -74.006,
          name: "New York",
        },
      },
      {
        id: 2,
        itemCount: 3,
        date: "2022-02-22",
        status: "Delivered",
        price: "$24.99",
        location: {
          latitude: 40.7128,
          longitude: -74.006,
          name: "New York",
        },
      },
      {
        id: 3,
        itemCount: 1,
        date: "2022-03-01",
        status: "Pending",
        price: "$10.00",
        location: {
          latitude: 37.78825,
          longitude: -122.4324,
          name: "San Francisco",
        },
      },
      {
        id: 4,
        itemCount: 1,
        date: "2022-03-01",
        status: "Pending",
        price: "$10.00",
        location: {
          latitude: 37.78825,
          longitude: -122.4324,
          name: "San Francisco",
        },
      },
      {
        id: 5,
        itemCount: 2,
        date: "2022-03-05",
        status: "Cancelled",
        price: "$18.50",
        location: {
          latitude: 51.5074,
          longitude: -0.1278,
          name: "London",
        },
      },
      {
        id: 6,
        itemCount: 2,
        date: "2022-03-05",
        status: "Cancelled",
        price: "$18.50",
        location: {
          latitude: 51.5074,
          longitude: -0.1278,
          name: "London",
        },
      },
    ];
    setOrders(dummyOrders);
    setLoading(false);
  }, []);
  const handleLocationPress = (location) => {
    const url = `https://www.google.com/maps?q=${location.latitude},${location.longitude}`;
    Linking.openURL(url);
  };
  return (
    <ScreenContainer
      authentication={(user) => {
        setUser(user);
      }}
    >
      <View style={styles.pageContainer}>
        {user ? (
          <>
            {loading ? (
              <View>
                <Text>Loading ...</Text>
              </View>
            ) : (
              <>
                <View style={styles.ordersContainerCover}>
                  <Text
                    style={[
                      styles.orderText,
                      styles.orderTextHeading,
                      styles.orderTextHeadingVersion2,
                    ]}
                  >
                    Orders
                  </Text>
                  <View style={styles.orderContainerInner}>
                    {orders.map((order) => (
                      <TouchableOpacity
                        key={order.id}
                        style={styles.orderContainer}
                        onPress={() => handleLocationPress(order.location)}
                      >
                        <View style={styles.leftContainer}>
                          <Text
                            style={styles.orderInfo}
                          >{`${order.date}`}</Text>
                          <Text style={styles.orderInfo}>{`#${order.id}`}</Text>
                          <Text
                            style={styles.orderInfo}
                          >{`${order.itemCount} items`}</Text>
                        </View>
                        <View style={styles.rightContainer}>
                          <Text style={styles.orderStatus}>{order.status}</Text>
                          <Text style={styles.orderPrice}>{order.price}</Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              </>
            )}
          </>
        ) : (
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
  middleOrderContainer: {
    borderRightWidth: 1,
    borderRightColor: "#ccc",
    borderLeftWidth: 1,
    borderLeftColor: "#ccc",
  },
  orderContainerInner: {
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  orderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#eee",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  leftContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  rightContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  orderInfo: {
    fontSize: 16,
    fontFamily: "Quicksand-SemiBold",
    color: BLACK,
  },
  orderStatus: {
    fontSize: 16,
    color: BLACK,
  },
  orderPrice: {
    fontSize: 16,
    fontFamily: "Quicksand-SemiBold",
    color: BLACK,
  },
  profileContainer: {
    alignItems: "center",
  },
  ordersContainerCover: {
    flexDirection: "column",
    alignItems: "stretch",
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  selectImageContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  selectImageText: {
    color: BLACK,
  },
  username: {
    fontSize: 18,
    fontFamily: "Quicksand-SemiBold",
    marginBottom: 5,
    color: BLACK,
  },
  address: {
    fontSize: 16,
    color: "#888",
    marginBottom: 10,
    color: BLACK,
  },
  ordersDataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: "#ccc",
    borderTopColor: "#ccc",
    paddingVertical: 10,
    // paddingHorizontal: 20,
    marginBottom: 20,
  },
  orderTextHeading: {
    fontFamily: "Quicksand-Bold",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  orderTextHeadingVersion2: {
    fontSize: 18,
    textAlign: "left",
  },
  orderText: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
    color: BLACK,
  },
  loginButton: {
    backgroundColor: "#afac4b",
    padding: 10,
    borderRadius: 5,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Quicksand-Bold",
    textAlign: "center",
  },
  pageContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 20,
  },
});

export default Delivery;
