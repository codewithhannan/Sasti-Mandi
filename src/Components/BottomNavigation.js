import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Images from "../Constants/Images";
import { BLACK, WHITE } from "../Constants/Colors";

export default function BottomNavigation({
  sidebarCallback = () => {},
  searchCallback = () => {},
  cartBadgeCount,
}) {
  const navigation = useNavigation();
  const { name } = useRoute();
  const isActive = (screenName) => {
    if (name === "SplashScreen" && screenName ==="Home") {
      return true;
    } else {
      return screenName === name;
    }
  };
  const sidebarToggle = () => {
    sidebarCallback();
  };
  const searchToggle = () => {
    searchCallback();
  };
  const getImage = (screenName) => {
    if (screenName === "Home" && isActive("Home")) {
      return Images.activeHomeImage;
    } else if (screenName === "Cart" && isActive("Cart")) {
      return Images.activeCartImage;
    } else if (screenName === "Profile" && isActive("Profile")) {
      return Images.activeUserImage;
    } else {
      return null;
    }
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.navLink} onPress={sidebarToggle}>
        <Image source={Images.menuImage} style={styles.navImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navLink} onPress={searchToggle}>
        <Image source={Images.searchImage} style={styles.navImage} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navLink}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={getImage("Home") || Images.homeImage}
          style={styles.navImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navLink}
        onPress={() => navigation.navigate("Cart")}
      >
        {cartBadgeCount > 0 && (
          <Text style={styles.cartBadgeCount}>{cartBadgeCount}</Text>
        )}
        <Image
          source={getImage("Cart") || Images.cartImage}
          style={styles.navImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navLink}
        onPress={() => navigation.navigate("Profile")}
      >
        <Image
          source={getImage("Profile") || Images.userImage}
          style={styles.navImage}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderTopColor: BLACK,
    backgroundColor: WHITE,
    borderTopWidth: 1,
  },
  navImage: {
    width: 28,
    height: 28,
  },
  cartBadgeCount: {
    position: "absolute",
    right: -15,
    top: -15,
    paddingHorizontal: 4.5,
    height: 17,
    backgroundColor: "#afac4b",
    borderRadius: 10,
    borderWidth: 1,
    overflow: "hidden",
    borderColor: "#000",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    color: WHITE,
  },
});
