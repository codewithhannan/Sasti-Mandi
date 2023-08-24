import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  GRADIENT_1,
  GRADIENT_2,
  GRADIENT_3,
  WHITE,
} from "./../Constants/Colors";
import Images from "../Constants/Images";

const AuthHeader = ({ isShowBackButton, screenName, navigation }) => {
  return (
    <View>
      <LinearGradient
        colors={[GRADIENT_1, GRADIENT_2, GRADIENT_3]}
        start={[1, 1]}
        end={[0, 0]}
        location={[0.25, 0.7, 1]}
        // style={styles.headerGradient}
      >
        <View style={styles.authHeaderContentCover}>
          {isShowBackButton ? (
            <TouchableOpacity
              onPress={(e) => {
                navigation.goBack(null);
              }}
              style={styles.authHeaderGoBackButton}
            >
              <Image
                source={Images.BackButton}
                style={[{ width: 26, height: 14 }]}
              />
            </TouchableOpacity>
          ) : (
            <></>
          )}

          <Text style={styles.authHeaderScreenName}>{screenName}</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  authHeaderContentCover: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
    alignItems: "center",
  },
  authHeaderGoBackButton: {
    position: "absolute",
    left: 15,
    zIndex: 2,
  },
  authHeaderScreenName: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 18,
    textAlign: "center",
    color: WHITE,
  },
});
export default AuthHeader;
