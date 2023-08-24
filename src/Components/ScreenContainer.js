import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import { BLACK, GRADIENT_2, WHITE } from "../Constants/Colors";
import Images from "../Constants/Images";
import Sidebar from "../Components/Sidebar";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import BottomNavigation from "../Components/BottomNavigation";
import LocationPicker from "./LocationPicker";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getData } from "../service/storage";
import { getCartItems } from "../service/cart";
const Width = Dimensions.get("window").width;

const ScreenContainer = ({
  children,
  isBackButton = false,
  authentication = () => {},
}) => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [cartBadgeCount, setCartBadgeCount] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const toggleSidebar = () => {
    setShowLocationPicker(!showLocationPicker);
  };
  const getUser = async (user) => {
    const userData = await getData("USER");
    if (userData) {
      setUser(userData);
      authentication(userData);
    } else {
      authentication(user);
    }
  };
  const getcartBadgeCount = async () => {
    setCartBadgeCount(await getCartItems());
  };
  useEffect(() => {
    getUser(user);
    getcartBadgeCount();
  }, [user]);

  return (
    <View style={styles.container}>
      <View
        style={{
          position: "relative",
          zIndex: 6,
        }}
      >
        <Sidebar
          show={showSidebar}
          onTouchOverlay={() => {
            setShowSidebar(!showSidebar);
          }}
        />
      </View>
      <View>
        <View style={styles.authHeaderContentCover}>
          {isBackButton ? (
            <TouchableOpacity
              onPress={(e) => {
                navigation.goBack(null);
              }}
              style={styles.authHeaderGoBackButton}
            >
              <MaterialCommunityIcons
                name="keyboard-backspace"
                size={24}
                color={BLACK}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={toggleSidebar}
              style={styles.authHeaderGoBackButton}
            >
              <MaterialIcons name="my-location" size={24} color={BLACK} />
            </TouchableOpacity>
          )}
          <View>
            <Image
              source={Images.LOGO_2}
              style={[
                styles.logo,
                {
                  width: 200,
                  height: 40,
                  resizeMode: "contain",
                },
              ]}
            />
          </View>
          <TouchableOpacity
            onPress={(e) => {
              navigation.navigate("Home");
            }}
            style={styles.authHeaderGoBackButtonReverse}
          >
            {cartBadgeCount && cartBadgeCount.length > 0 && (
              <Text style={styles.cartBadgeCount}>{cartBadgeCount.length}</Text>
            )}
            <Feather name="shopping-cart" size={24} color={BLACK} />
          </TouchableOpacity>
        </View>
      </View>
      <ImageBackground
        source={Images.AuthBG}
        style={styles.forgetPasswordBGImage}
      >
        <ScrollView style={styles.contentBox}>{children}</ScrollView>
      </ImageBackground>
      <LocationPicker
        show={showLocationPicker}
        onClose={(value) => {
          setShowLocationPicker(!showLocationPicker);
        }}
      />
      <BottomNavigation
        sidebarCallback={() => {
          setShowSidebar(!showSidebar);
        }}
        searchCallback={() => {
          setShowSearchBar(!showSearchBar);
        }}
        cartBadgeCount={cartBadgeCount && cartBadgeCount.length}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Width,
  },
  headerGradient: {
    paddingVertical: 10,
  },
  dashboardButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  styledButtonDefault: {
    width: 130,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "transparent",
    textAlign: "center",
    borderWidth: 1,
    borderColor: WHITE,
  },
  styledButtonDefaultText: {
    color: WHITE,
    fontFamily: "Quicksand-Regular",
    fontSize: 14,
    textAlign: "center",
  },
  styledButton: {
    width: 130,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: WHITE,
    textAlign: "center",
    marginRight: 10,
  },
  styledButtonText: {
    color: GRADIENT_2,
    fontFamily: "Quicksand-Regular",
    fontSize: 14,
    textAlign: "center",
  },
  forgetPasswordBGImage: {
    flex: 1,
    resizeMode: "contain",
    alignSelf: "stretch",
    backgroundColor: WHITE,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  authHeaderContentCover: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    borderBottomColor: BLACK,
    backgroundColor: WHITE,
    borderBottomWidth: 1,
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
    marginBottom: 10,
  },
  authHeaderScreenName: {
    fontFamily: "Quicksand-SemiBold",
    fontSize: 18,
    textAlign: "center",
    color: WHITE,
  },

  dashboardPage: {},
  contentBox: {},
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
export default ScreenContainer;
