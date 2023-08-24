import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BLACK, GRADIENT_1, GRADIENT_2, GRADIENT_3 } from "../Constants/Colors";
import { WHITE } from "./../Constants/Colors";
import { uploadURL } from "../service/request";
import { useState } from "react";
import Images from "../Constants/Images";
import { useNavigation } from "@react-navigation/native";
import { removeData } from './../service/storage';

const SidebarContent = () => {
  const navigation = useNavigation();
  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };

  const handleLogOut = async () => {
    await removeData("TOKEN");
    await removeData("ROLE");
    await removeData("USER");
    navigation.navigate("Login")
  };

  const handleShare = () => {
    // handle share action here
  };
  return (
    <View>
      <>
        <View>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => handlePress("Home")}
            >
              <Image source={Images.dashboardIcon} style={styles.icon} />
              <Text style={styles.menuText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => handlePress("Cart")}
            >
              <Image source={Images.cartIcon} style={styles.icon} />
              <Text style={styles.menuText}>Cart</Text>
            </TouchableOpacity>


          </View>
          <View style={styles.separator} />
          <View style={[styles.container, styles.containerCover]}>
            <Text style={styles.heading}>Profile</Text>
            <TouchableOpacity style={styles.menuItem} onPress={handleLogOut}>
              <Image source={Images.logOutIcon} style={styles.icon} />
              <Text style={styles.menuText}>Log out</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.separator} />
          <View style={[styles.container, styles.containerCover]}>
            <TouchableOpacity style={styles.menuItem} onPress={handleShare}>
              <Image source={Images.shareIcon} style={styles.icon} />
              <Text>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  headerGradient: {
    height: 150,
    alignItems: "center",
    flexDirection: "row",
  },
  authHeaderContentCover: {
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 25,
    alignItems: "flex-start",
  },
  authHeaderGoBackButton: {
    position: "absolute",
    left: 15,
    zIndex: 2,
  },
  userProfile: {
    borderRadius: 1000,
    marginBottom: 10,
  },
  sidebarUsername: {
    color: WHITE,
    fontFamily: "Quicksand-SemiBold",
    fontSize: 25,
    lineHeight: 31.5,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 22,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  icon: {
    width: 24,
    resizeMode: "contain",
    height: 24,
    marginRight: 20,
  },
  menuText: {
    fontFamily: "Quicksand-Medium",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    color: BLACK,
  },
  separator: {
    height: 1,
    backgroundColor: "#E0E0E0",
    // marginVertical: 10,
  },
  heading: {
    fontFamily: "Quicksand-Medium",
    fontSize: 16,
    lineHeight: 24,
    color: "#969696",
  },
  containerCover: {
    paddingTop: 10
  }
});
export default SidebarContent;
